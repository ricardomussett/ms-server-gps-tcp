import { Injectable } from '@nestjs/common';
import { parseDms, Dms } from 'dms-conversion';
import { COMMAND_CODES, GPS_STATUS, ALARM_STATUS, DIGITAL_INPUTS, IGNITION_STATUS } from '../enums/code.enum';

@Injectable()
export class ParseService {

    /**
     * Parsea los datos GPS recibidos del dispositivo
     * @param buffer Buffer con los datos crudos recibidos
     * @param packetInfo Objeto con información del paquete (tipo, longitud, etc)
     * @param clientId Identificador único del cliente
     * @returns Objeto con los datos GPS parseados
     * 
     * El método realiza las siguientes operaciones:
     * 1. Convierte los datos crudos a Buffer si es necesario
     * 2. Extrae el comando principal del paquete
     * 3. Extrae información básica del paquete (tipo, longitud, IP, payload, checksum)
     * 4. Inicializa un objeto resultado con la información básica
     * 5. Según el comando principal, delega el parseo a métodos específicos:
     *    - Datos de posición
     *    - Datos de alarma
     *    - Heartbeat
     *    - Respuesta a localización
     *    - Estado del tracker
     *    - Datos de iButton
     */
    public parseGpsData(buffer: Buffer, packetInfo: any, clientId: string, decodedPseudoIp: string): any {
        // Convierte datos crudos a Buffer si es string
        const data = buffer;
    
        // Extrae comando principal
        const mainCommand = data[2].toString(16).padStart(2, '0').toUpperCase();

        // Extrae tipo de paquete, longitud, IP pseudo, payload y checksum
        const packetType = packetInfo.packetType;
        const packetLength = packetInfo.length;
        const pseudoIP = decodedPseudoIp;
        const payload = packetInfo.payload;
        const checksum = packetInfo.checksum;
        const sim = this.pseudoIpToSim(pseudoIP);
    
        // Inicializa objeto resultado
        const result: any = {
          clientId,
          mainCommand,
          packetType,
          packetLength,
          pseudoIP,
          sim,
          payload,
          rawData: data.toString('hex'),
          checksum,
        };
    
        // Procesa según el comando principal
        switch (mainCommand) {
          case COMMAND_CODES.POSITION_DATA: // Datos de posición
            this.parsePositionData(data, result);
            break;
            
          case COMMAND_CODES.ALARM_DATA: // Datos de alarma
            this.parseAlarmData(data, result);
            break;
            
          case COMMAND_CODES.HEARTBEAT: // Heartbeat
            this.parseHeartbeatData(data, result);
            break;
            
          case COMMAND_CODES.REPLY_TO_LOCATE: // Respuesta a localización inmediata
            this.parseReplyToLocate(data, result);
            break;
            
          case COMMAND_CODES.TRACKER_STATUS: // Parámetros y estado del tracker
            this.parseTrackerStatus(data, result);
            break;
            
          case COMMAND_CODES.IBUTTON_DATA: // Datos de iButton
            this.parseIButtonData(data, result);
            break;
            
          default:
            result.message = 'Tipo de comando desconocido';
            break;
        }
        
        return result;
      }
    
      /**
       * Parsea los datos de posición del paquete GPS
       * @param buffer Buffer que contiene los datos crudos del paquete
       * @param result Objeto donde se almacenarán los datos parseados
       * 
       * El método procesa:
       * 1. Timestamp (6 bytes): Fecha y hora del registro
       * 2. Latitud (4 bytes): Posición en grados decimales
       * 3. Longitud (4 bytes): Posición en grados decimales
       * 4. Velocidad (2 bytes): En km/h
       * 5. Ángulo (2 bytes): Dirección en grados
       * 6. Estado GPS (1 byte): Ubicación, diferencial y satélites
       * 7. Entradas digitales (1 byte): Estado de entradas
       * 8. Estado de ignición (1 byte)
       * 9. Resistencia de aceite (2 bytes): En ohmios
       * 10. Voltaje (2 bytes): En voltios
       * 11. Kilometraje (4 bytes): En metros
       * 12. Temperatura (2 bytes)
       * 13. Datos extendidos (opcional): Si hay bytes adicionales
       */
      private parsePositionData(buffer: Buffer, result: any) {
        // Los datos de posición comienzan en el byte 9 (después de 24 24 cmd 00 len pseudoIP)
        const posData = buffer.subarray(9, 9 + 35); // 35 bytes de datos de posición
        
        // Parsea fecha y hora (6 bytes)
        result.timestamp = this.decodeTimestamp(posData.subarray(0, 6));
        
        // Parsea latitud (4 bytes)
        result.latitude = this.decodeLatitude(posData.subarray(6, 10));
        
        // Parsea longitud (4 bytes)
        result.longitude = this.decodeLongitude(posData.subarray(10, 14));
    
        // Parsea velocidad (2 bytes) en km/h
        result.speed = this.decodeSpeed(posData.subarray(14, 16));
     
        // Parsea ángulo (2 bytes) en grados
        result.angle = this.decodeAngle(posData.subarray(16, 18));
        
        // Estado GPS (1 byte)
        const gpsStatus = posData[18];
        result.gpsStatus = {
          located: !!(gpsStatus & GPS_STATUS.LOCATED), // Ubicación fija
          differential: !!(gpsStatus & GPS_STATUS.DIFFERENTIAL), // GPS diferencial
          satellites: gpsStatus & GPS_STATUS.SATELLITES, // Número de satélites
        };
        
        // Entradas digitales (1 byte)
        result.digitalInputs = this.decodeDigitalInputs(posData[19])
        
        // Estado de ignición (1 byte)
        result.ignition = this.decodeIgnition(posData[20])
        
        // Entradas analógicas (4 bytes - 2 para aceite, 2 para voltaje)
        result.oilResistance = this.decodeOilResistance(posData.subarray(21, 23));
        result.voltage = this.decodeVoltage(posData.subarray(23, 25));
        
        // Kilometraje (4 bytes) en metros
        result.mileage = this.decodeMileage(posData.subarray(25, 29));
        
        // Temperatura (2 bytes)
        result.temperature = this.decodeTemperature(posData[29]);
        
        // Datos extendidos si están disponibles
        if (buffer.length > 36) {
          this.parseExtendedData(buffer.subarray(36), result);
        }
      }
    
      /**
       * Parsea los datos de alarma del paquete GPS
       * @param buffer Buffer que contiene los datos crudos del paquete
       * @param result Objeto donde se almacenarán los datos parseados
       * 
       * El método procesa:
       * 1. Los datos de posición usando parsePositionData()
       * 2. Los bytes de alarma que contienen diferentes estados:
       * 
       * Primer byte de alarma (byte 36):
       * - oilChange: Alarma de cambio de aceite
       * - crossBorder: Cruce de frontera
       * - overVoltage: Sobrevoltaje
       * - underVoltage: Bajo voltaje
       * - overload: Sobrecarga
       * - overtimeDriving: Exceso de tiempo de conducción
       * - enterBorder: Entrada en frontera
       * 
       * Segundo byte de alarma (byte 37):
       * - illegalDoorOpen: Apertura ilegal de puerta
       * - illegalStart: Arranque ilegal
       * - vibration: Vibración detectada
       * - centerEnabledAlarm: Alarma habilitada desde central
       * - powerFailure: Fallo de energía
       * - parking: Estacionamiento
       * - overSpeed: Exceso de velocidad
       * - emergency: Emergencia
       */
      private parseAlarmData(buffer: Buffer, result: any) {
        // Primero parsear datos de posición (igual que comando 80)
        this.parsePositionData(buffer, result);
        
        // Luego parsear datos de alarma (2 bytes después de datos de posición)
        const alarmByte1 = buffer[36];
        const alarmByte2 = buffer[37];
        
        result.alarms = {
          oilChange: !!(alarmByte1 & ALARM_STATUS.OIL_CHANGE),
          crossBorder: !!(alarmByte1 & ALARM_STATUS.CROSS_BORDER), 
          overVoltage: !!(alarmByte1 & ALARM_STATUS.OVER_VOLTAGE),
          underVoltage: !!(alarmByte1 & ALARM_STATUS.UNDER_VOLTAGE),
          overload: !!(alarmByte1 & ALARM_STATUS.OVERLOAD),
          overtimeDriving: !!(alarmByte1 & ALARM_STATUS.OVERTIME_DRIVING),
          enterBorder: !!(alarmByte1 & ALARM_STATUS.ENTER_BORDER),
          
          illegalDoorOpen: !!(alarmByte2 & ALARM_STATUS.ILLEGAL_DOOR_OPEN),
          illegalStart: !!(alarmByte2 & ALARM_STATUS.ILLEGAL_START),
          vibration: !!(alarmByte2 & ALARM_STATUS.VIBRATION), 
          centerEnabledAlarm: !!(alarmByte2 & ALARM_STATUS.CENTER_ENABLED_ALARM),
          powerFailure: !!(alarmByte2 & ALARM_STATUS.POWER_FAILURE),
          parking: !!(alarmByte2 & ALARM_STATUS.PARKING),
          overSpeed: !!(alarmByte2 & ALARM_STATUS.OVER_SPEED),
          emergency: !!(alarmByte2 & ALARM_STATUS.EMERGENCY),
        };
      }
    
      /**
       * Parsea los datos del paquete de heartbeat (latido) del dispositivo GPS
       * @param buffer Buffer que contiene los datos crudos del paquete
       * @param result Objeto donde se almacenarán los datos parseados
       * 
       * El método extrae:
       * - message: Mensaje de confirmación de recepción del heartbeat
       * - calibrationValue: Valor de calibración del dispositivo (byte 5)
       * - mainOrderReply: Respuesta de la orden principal (byte 6)
       * - slaveOrderReply: Respuesta de la orden secundaria (byte 7)
       */
      private parseHeartbeatData(buffer: Buffer, result: any) {
        // Simple heartbeat - just acknowledge
        result.message = 'Heartbeat received';
        result.calibrationValue = buffer[5];
        result.mainOrderReply = buffer[6];
        result.slaveOrderReply = buffer[7];
      }
    
      /**
       * Parsea los datos extendidos del paquete GPS basado en la señal secundaria
       * @param buffer Buffer que contiene los datos extendidos
       * @param result Objeto donde se almacenarán los datos parseados
       * 
       * El método procesa diferentes tipos de datos extendidos según el subSignal:
       * - 0x03: Sensores de temperatura 2,3,4 y peso
       *   - temperature2,3,4: Temperaturas de sensores adicionales
       *   - weight: Peso en unidades del dispositivo
       * 
       * - 0x06: Temperatura y humedad
       *   - temperature: Objeto con signo, parte entera y decimal
       *   - humidity: Objeto con parte entera y decimal
       * 
       * - default: Datos desconocidos, guarda señal y datos crudos
       */
      private parseExtendedData(buffer: Buffer, result: Record<string, any>): void {
        // Obtener señal secundaria del byte 4
        const subSignal: number = buffer[4];
        
        switch (subSignal) {
          case 0x03: // Sensores de temperatura 2,3,4 y peso
            result.extended = {
              temperature2: this.parseTemperature(buffer.subarray(5, 7)),
              temperature3: this.parseTemperature(buffer.subarray(7, 9)), 
              temperature4: this.parseTemperature(buffer.subarray(9, 11)),
              weight: (buffer[11] << 8) | buffer[12], // Combina 2 bytes para el peso
            };
            break;
            
          case 0x06: // Temperatura y humedad
            result.extended = {
              temperature: {
                sign: buffer[6] === 1 ? -1 : 1, // 1 = negativo, otro = positivo
                integer: buffer[7], // Parte entera
                decimal: buffer[8], // Parte decimal
              },
              humidity: {
                integer: buffer[9], // Parte entera
                decimal: buffer[10], // Parte decimal
              },
            };
            break;
            
          default: // Señal desconocida
            result.extended = {
              unknownSignal: subSignal,
              rawData: buffer.toString('hex'),
            };
            break;
        }
      }
    
      /**
       * Parsea la temperatura desde un buffer de 2 bytes
       * @param buffer Buffer de 2 bytes que contiene la temperatura codificada
       * - byte 0: signo de la temperatura (0x01 = negativo, otro = positivo)
       * - byte 1: valor absoluto de la temperatura
       * @returns Número que representa la temperatura en grados Celsius
       * @example
       * Input: [0x01, 0x14]
       * Output: -20 (grados Celsius)
       * 
       * Input: [0x00, 0x14] 
       * Output: 20 (grados Celsius)
       */
      private parseTemperature(buffer: Buffer): number {
        const sign = buffer[0] === 0x01 ? -1 : 1;
        return sign * buffer[1];
      }
    
      /**
       * Parsea la respuesta a un comando de localización inmediata
       * @param buffer Buffer con los datos crudos recibidos del dispositivo
       * @param result Objeto donde se almacenarán los resultados parseados
       * 
       * El método realiza las siguientes operaciones:
       * 1. Procesa los datos de posición usando el mismo formato que el comando 0x80
       * 2. Agrega un mensaje indicando que es una respuesta a localización inmediata
       * 
       * La estructura del paquete es idéntica a la de datos de posición regular,
       * por lo que se reutiliza el método parsePositionData()
       */
      private parseReplyToLocate(buffer: Buffer, result: Record<string, any>): void {
        // Mismo formato que datos de posición (comando 0x80)
        this.parsePositionData(buffer, result);
        result.message = 'Reply to locate immediately command';
      }
    
      /**
       * Parsea los datos de estado del tracker
       * @param buffer Buffer con los datos crudos recibidos
       * @param result Objeto donde se almacenarán los resultados parseados
       * 
       * El método procesa los siguientes datos:
       * - Tiempo de muestreo (samplingTime): año, mes, día, hora, minuto, segundo
       * - Estado de alarma (alarmStatus): valor de 16 bits
       * - Estado de localización (located): true/false
       * - Tipo de muestreo (samplingType): tiempo fijo o distancia fija
       * - Valor de muestreo (samplingValue): intervalo configurado
       * - Tipo de envío (sendingType): envío por punto o silencioso
       * - Configuración de parada (carStopSetting): valor de parada
       * - Configuración de exceso de velocidad (overspeedSetting): límite
       * - Límite de teléfono (phoneLimit): true/false
       * - Límite de nodo de área (areaNodeLimit): true/false
       * - Configuración de seguridad (safeSetting): valor de seguridad
       * - Tiempo de conducción prolongado (longTimeDriving): duración
       * - Valor de muestreo con ACC apagado (samplingValueAccOff): intervalo
       * - Interruptor de alarma de emergencia (emergencyAlarmSwitch): true/false
       * - Relacionado con fotografía (photographRelated): valor de configuración
       */
      private parseTrackerStatus(buffer: Buffer, result: Record<string, any>): void {
        // Extrae los 36 bytes de datos de estado después de los headers
        const statusData: Buffer = buffer.slice(9, 9 + 36);
        
        result.status = {
          samplingTime: {
            year: 2000 + (statusData[0] >> 4) * 10 + (statusData[0] & 0x0F), // Año base 2000 + valor BCD
            month: (statusData[1] >> 4) * 10 + (statusData[1] & 0x0F), // Mes en formato BCD
            day: (statusData[2] >> 4) * 10 + (statusData[2] & 0x0F), // Día en formato BCD
            hour: (statusData[3] >> 4) * 10 + (statusData[3] & 0x0F), // Hora en formato BCD
            minute: (statusData[4] >> 4) * 10 + (statusData[4] & 0x0F), // Minuto en formato BCD
            second: (statusData[5] >> 4) * 10 + (statusData[5] & 0x0F), // Segundo en formato BCD
          },
          alarmStatus: (statusData[6] << 8) | statusData[7], // Estado de alarma (16 bits)
          located: statusData[8] === 1, // Estado de localización
          samplingType: statusData[9] === 1 ? 'fixed time' : 'fixed distance', // Tipo de muestreo
          samplingValue: (statusData[10] << 8) | statusData[11], // Valor de muestreo (16 bits)
          sendingType: statusData[12] === 1 ? 'point send' : 'silence', // Tipo de envío
          carStopSetting: statusData[13], // Configuración de parada
          overspeedSetting: statusData[14], // Límite de velocidad
          phoneLimit: statusData[15] === 1, // Límite de teléfono
          areaNodeLimit: statusData[16] === 1, // Límite de nodo de área
          safeSetting: statusData[17], // Configuración de seguridad
          longTimeDriving: (statusData[18] << 8) | statusData[19], // Tiempo de conducción (16 bits)
          samplingValueAccOff: (statusData[20] << 8) | statusData[21], // Valor de muestreo ACC off (16 bits)
          emergencyAlarmSwitch: statusData[22] === 1, // Interruptor de alarma
          photographRelated: statusData[23], // Configuración de fotografía
        };
      }
    
      /**
       * Parsea los datos recibidos del iButton
       * @param buffer Buffer con los datos crudos recibidos
       * @param result Objeto donde se almacenarán los resultados parseados
       * 
       * El método procesa diferentes tipos de datos según el subcomando:
       * - 0x06: Modo anti-robo configurado exitosamente
       * - 0x07: Error al configurar modo anti-robo
       * - 0x08: Modo anti-robo cancelado
       * - 0x0A: Configuración de ID de iButton (nombre y código)
       * - 0x0B: Datos de lectura de iButton (estado, fecha/hora, ubicación, conductor)
       * 
       * @example
       * Para subcomando 0x0A (configuración):
       * buffer = [..., 0x0A, <nombre,id>, checksum, 0x0D]
       * result = {
       *   driver: {
       *     name: "Juan",
       *     iButtonId: "123456"
       *   }
       * }
       */
      private parseIButtonData(buffer: Buffer, result: Record<string, any>): void {
        // Obtiene el subcomando del primer byte después del header
        const subCommand: number = buffer[9];
        result.subCommand = subCommand;
        
        switch (subCommand) {
          case 0x06: // Anti-theft mode set successfully
          case 0x07: // Anti-theft mode set failed
          case 0x08: // Anti-theft mode cancelled
            result.message = `Anti-theft mode ${
              subCommand === 0x06 ? 'set' : 
              subCommand === 0x07 ? 'set failed' : 
              'cancelled'
            }`;
            break;
            
          case 0x0A: // iButton ID setting
            const content: string = buffer.slice(10, buffer.length - 2).toString('ascii');
            const matches: RegExpMatchArray | null = content.match(/<([^,]+),([^>]+)>/);
            if (matches) {
              result.driver = {
                name: matches[1],
                iButtonId: matches[2],
              };
            }
            break;
            
          case 0x0B: // iButton swiping data
            const status: number = buffer[10];
            const dateTime: {
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              second: number;
            } = {
              year: 2000 + buffer[11],
              month: buffer[12],
              day: buffer[13],
              hour: buffer[14],
              minute: buffer[15],
              second: buffer[16],
            };
            
            // Parse coordinates (same as position data)
            const latSign: number = (buffer[17] & 0x80) ? -1 : 1;
            const latDegrees: number = (buffer[17] & 0x7F);
            const latMinutes: number = buffer[18] + (buffer[19] / 1000);
            
            const lonSign: number = (buffer[20] & 0x80) ? -1 : 1;
            const lonDegrees: number = (buffer[20] & 0x7F);
            const lonMinutes: number = buffer[21] + (buffer[22] / 1000);
            
            // Parse driver info
            const driverInfo: string = buffer.slice(23, buffer.length - 2).toString('ascii');
            const driverMatch: RegExpMatchArray | null = driverInfo.match(/<([^,]+),([^>]+)>/);
            
            result.swipeData = {
              status,
              dateTime: new Date(
                dateTime.year, dateTime.month - 1, dateTime.day,
                dateTime.hour, dateTime.minute, dateTime.second
              ),
              latitude: latSign * (latDegrees + latMinutes / 60),
              longitude: lonSign * (lonDegrees + lonMinutes / 60),
              located: !!(buffer[23] & 0x80),
            };
            
            if (driverMatch) {
              result.swipeData.driver = {
                name: driverMatch[1],
                iButtonId: driverMatch[2],
              };
            }
            break;
            
          default:
            result.message = 'Unknown iButton sub-command';
            break;
        }
      }
    
      /**
       * Decodifica la latitud desde un buffer de 4 bytes en formato BCD
       * @param bytes Buffer de 4 bytes que contiene la latitud codificada
       * - byte 0: bit 7 indica Norte(0)/Sur(1), bits 6-4 decenas, bits 3-0 unidades de grados
       * - byte 1: bits 7-4 decenas minutos, bits 3-0 unidades minutos
       * - byte 2: bits 7-4 primer decimal minutos, bits 3-0 segundo decimal minutos
       * - byte 3: bits 7-4 tercer decimal minutos, bits 3-0 no usado
       * @example
       * Input: [0x23, 0x45, 0x67, 0x80] (23H，45H，67H，80H)
       * Cálculo:
       * - Signo: 0x23 & 0x80 = 0 -> Norte
       * - Grados: ((0x23 & 0x70) >> 4) + (0x23 & 0x0F)*10 = 23°
       * - Minutos enteros: ((0x45 & 0xF0) >> 4) * 10 + (0x45 & 0x0F) = 45'
       * - Decimales: ((0x67 & 0xF0) >> 4) * 100 + (0x67 & 0x0F) * 10 + ((0x80 & 0xF0) >> 4) = 0.678'
       * Output: 23°45.678'N -> 23.76130
       * @returns {number} Latitud en grados decimales
       * @throws {Error} Si el buffer no tiene 4 bytes
       */
      private decodeLatitude(bytes: Buffer): number {
        if (bytes.length !== 4) {
            throw new Error('Se esperaban 4 bytes para latitud');
        }
      
        // Extraer signo (bit más significativo del primer byte)
        const isNorth = (bytes[0] & 0x80) === 0x00;
      
        // Decodificar grados (BCD) - primer byte sin el bit de signo
        const degrees = ((bytes[0] & 0x70) >> 4) + (bytes[0] & 0x0F)*10;
      
        // Decodificar minutos enteros en formato BCD
        const minutesInt = ((bytes[1] & 0xF0) >> 4) * 10 + (bytes[1] & 0x0F);
        
        // Decodificar parte decimal de los minutos (3 dígitos)
        const minutesDecimal = (
            ((bytes[2] & 0xF0) >> 4) * 100 +  // primer dígito decimal
            (bytes[2] & 0x0F) * 10 +          // segundo dígito decimal
            ((bytes[3] & 0xF0) >> 4)          // tercer dígito decimal
        ) / 1000;
      
        // Multiplicar por 10 para convertir a grados decimales
        const minutes = 10*(minutesInt + minutesDecimal);
      
        // Convertir a formato DMS y luego a grados decimales
        const dmsString = `${degrees}°${minutes.toFixed(3)}'${isNorth ? 'N' : 'S'}`;
        const decimalDegrees = parseDms(dmsString);
      
        return decimalDegrees;
      }
      
      /**
       * Decodifica la longitud desde un buffer de 4 bytes en formato BCD
       * @param bytes Buffer de 4 bytes que contiene la longitud codificada
       * - byte 0: bit 7 indica Este(0)/Oeste(1), bits 6-4 centenas, bits 3-0 decenas de grados
       * - byte 1: bits 7-4 unidades de grados, bits 3-0 decenas de minutos
       * - byte 2: bits 7-4 unidades minutos, bits 3-0 primer decimal minutos
       * - byte 3: bits 7-4 segundo decimal minutos, bits 3-0 tercer decimal minutos
       * @example
       * Input: [0x13, 0x04, 0x56, 0x08] (13H，04H，56H，08H)
       * Cálculo:
       * - Signo: 0x13 & 0x80 = 0 -> Este
       * - Grados: ((0x13 & 0x70) >> 4) * 100 + (0x13 & 0x0F) * 10 + ((0x04 & 0xF0) >> 4) = 130°
       * - Minutos: (0x04 & 0x0F) * 10 + ((0x56 & 0xF0) >> 4) = 45'
       * - Decimales: (0x56 & 0x0F)/10 + ((0x08 & 0xF0) >> 4)/100 + (0x08 & 0x0F)/1000 = 0.608'
       * Output: 130°45.608'E -> 130.76013333333334
       * @returns {number} Longitud en grados decimales
       */
      private decodeLongitude(bytes: Buffer): number {
        if (bytes.length !== 4) throw new Error('Se requieren 4 bytes');
      
        // Signo (bit 7 del primer byte)
        const isEast = (bytes[0] & 0x80) === 0x00;
      
        // Grados: primeros 3 dígitos (BCD)
        const degrees = 
            ((bytes[0] & 0x70) >> 4) * 100 + // centenas (1 en 13H)
            (bytes[0] & 0x0F) * 10 +         // decenas (3 en 13H)
            ((bytes[1] & 0xF0) >> 4);         // unidades (0 en 04H)
      
        // Minutos: parte entera + decimal
        const minutes = 
            ((bytes[1] & 0x0F) * 10) +       // min enteros (4 en 04H → 40)
            ((bytes[2] & 0xF0) >> 4) +       // min enteros (5 en 56H → +5 = 45)
            ((bytes[2] & 0x0F) / 10) +       // decimal (6 en 56H → 0.6)
            ((bytes[3] & 0xF0) >> 4) / 100 + // decimal (0 en 08H → 0.00)
            (bytes[3] & 0x0F) / 1000;        // decimal (8 en 08H → 0.008)
      
        // Convertir a grados decimales
        const dmsString = `${degrees}°${minutes.toFixed(3)}'${isEast ? 'E' : 'W'}`;
        const decimalDegrees = parseDms(dmsString);
      
        return decimalDegrees;
      }
        
      /**
       * Decodifica la velocidad desde un buffer de 2 bytes en formato BCD
       * @param bytes Buffer de 2 bytes que contiene la velocidad codificada
       * - byte 0: nibble superior representa miles, nibble inferior centenas
       * - byte 1: nibble superior representa decenas, nibble inferior unidades
       * @example
       * Input: [0x01, 0x20] (01H，20H)
       * Cálculo:
       * - (0x01 >> 4) * 1000 = 0 * 1000 = 0
       * - (0x01 & 0x0F) * 100 = 1 * 100 = 100  
       * - (0x20 >> 4) * 10 = 2 * 10 = 20
       * - (0x20 & 0x0F) = 0
       * Output: 120 (km/h)
       * @returns {number} Velocidad en km/h
       */
      private decodeSpeed(bytes: Buffer): number {
        const speed = (bytes[0] >> 4) * 1000 + // Nibble superior del primer byte * 1000
        (bytes[0] & 0x0F) * 100 +             // Nibble inferior del primer byte * 100
        (bytes[1] >> 4) * 10 +                // Nibble superior del segundo byte * 10
        (bytes[1] & 0x0F);                    // Nibble inferior del segundo byte
      
        return speed;
      }
      
      /**
       * Decodifica el ángulo de dirección desde un buffer de 2 bytes
       * @param bytes Buffer de 2 bytes que contiene el ángulo codificado en BCD
       * - byte 0: byte completo representa las centenas (01H = 100)
       * - byte 1: nibble superior representa decenas, nibble inferior unidades (54H = 54)
       * @example
       * Input: [0x01, 0x54] (01H，54H)
       * Cálculo:
       * - 0x01 & 0xFF = 1 -> 1 * 100 = 100
       * - (0x54 & 0xF0) >> 4 = 5 -> 5 * 10 = 50
       * - 0x54 & 0x0F = 4
       * Output: 154 (grados)
       * @returns {number} Ángulo en grados (0-359)
       */
      private decodeAngle(bytes: Buffer): number {
        const angle = (bytes[0] & 0xFF) * 100 +  // Toma el byte completo como centenas
        ((bytes[1] & 0xF0) >> 4) * 10 +  // Toma el nibble superior como decenas
        (bytes[1] & 0x0F);  // Toma el nibble inferior como unidades
      
        return angle;
      }
      
      /**
       * Decodifica la resistencia del sensor de aceite desde un buffer de 2 bytes
       * @param bytes Buffer de 2 bytes que contiene la resistencia codificada
       * - byte 0: byte más significativo (MSB)
       * - byte 1: byte menos significativo (LSB)
       * @returns Número que representa la resistencia del sensor de aceite en ohmios
       */
      private decodeOilResistance(bytes: Buffer): number {
        // Combina los 2 bytes usando operaciones bit a bit
        const oilResistance = (bytes[0] << 8) | bytes[1];
        return oilResistance;
      }
      
      /**
       * Decodifica el voltaje desde un buffer de 2 bytes
       * @param bytes Buffer de 2 bytes que contiene el voltaje codificado
       * - byte 0: byte más significativo (MSB)
       * - byte 1: byte menos significativo (LSB)
       * El valor resultante se divide por 100 para obtener el voltaje real
       * @returns Número que representa el voltaje en voltios con 2 decimales
       */
      private decodeVoltage(bytes: Buffer): number {
        // Combina los 2 bytes usando operaciones bit a bit y divide por 100
        const voltage = ((bytes[0] << 8) | bytes[1]) / 100;
        return voltage;
      }
      
      /**
       * Decodifica el kilometraje desde un buffer de 4 bytes
       * @param bytes Buffer de 4 bytes que contiene el kilometraje codificado
       * - byte 0: bits más significativos (MSB)
       * - byte 1: segundo byte más significativo
       * - byte 2: tercer byte más significativo  
       * - byte 3: bits menos significativos (LSB)
       * @returns Número que representa el kilometraje total en metros
       */
      private decodeMileage(bytes: Buffer): number {
        // Combina los 4 bytes usando operaciones bit a bit
        // Desplaza cada byte a su posición correspondiente y los combina con OR
        const mileage = (bytes[0] << 24) | // Byte más significativo
                       (bytes[1] << 16) |   // Segundo byte
                       (bytes[2] << 8) |    // Tercer byte
                       bytes[3];            // Byte menos significativo
        return mileage;
      }
    
      private decodeDigitalInputs(bytes) {
        const digitalInputs = bytes;
        return {
          systemUse: !!(digitalInputs & DIGITAL_INPUTS.SYSTEM_USE),
          input1: !!(digitalInputs & DIGITAL_INPUTS.INPUT1),
          antennaShort: !!(digitalInputs & DIGITAL_INPUTS.ANTENNA_SHORT),
          antennaOpen: !!(digitalInputs & DIGITAL_INPUTS.ANTENNA_OPEN),
          input2: !!(digitalInputs & DIGITAL_INPUTS.INPUT2),
          input3: !!(digitalInputs & DIGITAL_INPUTS.INPUT3),
          input4: !!(digitalInputs & DIGITAL_INPUTS.INPUT4),
        };
      }
    
      /**
       * Decodifica el estado de ignición desde un byte
       * @param bytes Byte que contiene el estado de ignición codificado
       * @returns Boolean que indica si la ignición está encendida (true) o apagada (false)
       * - true: ignición encendida (IGNITION_STATUS.ON)
       * - false: ignición apagada
       */
      private decodeIgnition(bytes: number): boolean {
        return bytes === IGNITION_STATUS.ON;
      }
    
      /**
       * Decodifica la temperatura desde un byte
       * @param bytes Byte que contiene la temperatura codificada
       * - Si el byte es 0x01, la temperatura es negativa
       * - En otro caso, la temperatura es positiva
       * @returns Número que representa la temperatura en grados Celsius
       */
      private decodeTemperature(bytes: number): number {
        // Determina el signo de la temperatura
        const tempSign = bytes === 0x01 ? -1 : 1;
        // Multiplica el valor por el signo para obtener la temperatura final
        return tempSign * bytes;
      }
    
      /**
       * Decodifica un timestamp desde un buffer de 6 bytes
       * @param bytes Buffer de 6 bytes que contiene la fecha y hora codificada
       * - byte 0: año (2 dígitos, offset 2000)
       * - byte 1: mes (1-12) 
       * - byte 2: día (1-31)
       * - byte 3: hora (0-23)
       * - byte 4: minutos (0-59)
       * - byte 5: segundos (0-59)
       * @returns Objeto Date con la fecha y hora decodificada
       */
      private decodeTimestamp(bytes: Buffer): Date {
        // Extrae cada componente de fecha/hora usando operaciones bit a bit
        const dateTime = {
          year: 2000 + (bytes[0] >> 4) * 10 + (bytes[0] & 0x0F), // Suma 2000 al año de 2 dígitos
          month: (bytes[1] >> 4) * 10 + (bytes[1] & 0x0F), // Extrae mes
          day: (bytes[2] >> 4) * 10 + (bytes[2] & 0x0F), // Extrae día
          hour: (bytes[3] >> 4) * 10 + (bytes[3] & 0x0F), // Extrae hora
          minute: (bytes[4] >> 4) * 10 + (bytes[4] & 0x0F), // Extrae minutos
          second: (bytes[5] >> 4) * 10 + (bytes[5] & 0x0F), // Extrae segundos
        };

        // Crea objeto Date (mes -1 porque en JS los meses van de 0-11)
        const timestamp = new Date(
          dateTime.year, dateTime.month - 1, dateTime.day,
          dateTime.hour, dateTime.minute, dateTime.second
        );
    
        return timestamp;
      }


      /**
       * Convierte una dirección IP pseudo-aleatoria en un número de SIM
       * @param ip String con formato de dirección IP (ej: "192.168.1.1")
       * @returns String con el número de SIM decodificado (11 dígitos)
       * 
       * El proceso de decodificación es el siguiente:
       * 1. La IP se divide en 4 bytes
       * 2. De cada byte se extrae el bit más significativo (D7)
       * 3. Los 4 bits D7 forman un valor base (iHigt) que se suma a 30
       * 4. Se eliminan los bits D7 de cada byte
       * 5. Se forma el número concatenando:
       *    - "1" (primer dígito fijo)
       *    - Valor base + 30 (2 dígitos)
       *    - Los 4 bytes sin D7 (2 dígitos cada uno)
       */
      private pseudoIpToSim(ip: string): string {
        // Dividir la IP en sus 4 componentes
        const ipParts = ip.split('.').map(part => parseInt(part, 10));
        
        // Verificar formato válido
        if (ipParts.length !== 4 || ipParts.some(isNaN)) {
            throw new Error("Formato de IP pseudo inválido");
        }
    
        // Extraer bits superiores (D7) de cada byte
        const bits = ipParts.map(part => (part & 0x80) !== 0 ? 1 : 0);
        
        // Calcular iHigt (valor base)
        const iHigt = 
            (bits[0] << 3) | 
            (bits[1] << 2) | 
            (bits[2] << 1) | 
            bits[3];
    
        // Eliminar bit D7 de cada byte
        const cleanParts = ipParts.map(part => part & 0x7F);
        
        // Reconstruir grupos del SIM
        const grupoBase = 30 + iHigt;
        const grupos = [
            grupoBase.toString().padStart(2, '0'),
            cleanParts[0].toString().padStart(2, '0'),
            cleanParts[1].toString().padStart(2, '0'),
            cleanParts[2].toString().padStart(2, '0'),
            cleanParts[3].toString().padStart(2, '0')
        ];
    
        // Formar número de SIM
        return `1${grupos.join('')}`;
    }

}
