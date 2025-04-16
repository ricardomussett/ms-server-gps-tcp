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
    public parseGpsData(buffer: Buffer, packetInfo: any, clientId: string): any {
        // Convierte datos crudos a Buffer si es string
        const data = buffer;
    
        // Extrae comando principal
        const mainCommand = data[2].toString(16).padStart(2, '0').toUpperCase();

        // Extrae tipo de paquete, longitud, IP pseudo, payload y checksum
        const packetType = packetInfo.packetType;
        const packetLength = packetInfo.length;
        const pseudoIP = packetInfo.pseudoIp;
        const payload = packetInfo.payload;
        const checksum = packetInfo.checksum;
    
        // Inicializa objeto resultado
        const result: any = {
          clientId,
          mainCommand,
          packetType,
          packetLength,
          pseudoIP,
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
    
      private parsePositionData(buffer: Buffer, result: any) {
        // Position data starts at byte 9 (after 24 24 cmd 00 len pseudoIP)
        const posData = buffer.subarray(9, 9 + 35); // 35 bytes position data
        
        // Parse date and time (6 bytes)
        result.timestamp = this.decodeTimestamp(posData.subarray(0, 6));
        
        // Parse latitude (4 bytes)
        result.latitude = this.decodeLatitude(posData.subarray(6, 10));
        
        // Parse longitude (4 bytes)
        result.longitude = this.decodeLongitude(posData.subarray(10, 14));
    
        // Parse speed (2 bytes) in km/h
        result.speed = this.decodeSpeed(posData.subarray(14, 16));
     
        // Parse angle (2 bytes) in degrees
        result.angle = this.decodeAngle(posData.subarray(16, 18));
        
        // GPS status (1 byte)
        const gpsStatus = posData[18];
        result.gpsStatus = {
          located: !!(gpsStatus & GPS_STATUS.LOCATED),
          differential: !!(gpsStatus & GPS_STATUS.DIFFERENTIAL),
          satellites: gpsStatus & GPS_STATUS.SATELLITES,
        };
        
        // Digital inputs (1 byte)
        result.digitalInputs = this.decodeDigitalInputs(posData[19])
        
        // Ignition status (1 byte)
        result.ignition = this.decodeIgnition(posData[20])
        
        // Analog inputs (4 bytes - 2 for oil, 2 for voltage)
        result.oilResistance = this.decodeOilResistance(posData.subarray(21, 23));
        result.voltage = this.decodeVoltage(posData.subarray(23, 25));
        
        // Mileage (4 bytes) in meters
        result.mileage = this.decodeMileage(posData.subarray(25, 29));
        
        // Temperature (2 bytes)
        result.temperature = this.decodeTemperature(posData[29]);
        
        // Extended data if available
        if (buffer.length > 36) {
          this.parseExtendedData(buffer.subarray(36), result);
        }
      }
    
      private parseAlarmData(buffer: Buffer, result: any) {
        // First parse position data (same as command 80)
        this.parsePositionData(buffer, result);
        
        // Then parse alarm data (2 bytes after position data)
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
    
      private parseHeartbeatData(buffer: Buffer, result: any) {
        // Simple heartbeat - just acknowledge
        result.message = 'Heartbeat received';
        result.calibrationValue = buffer[5];
        result.mainOrderReply = buffer[6];
        result.slaveOrderReply = buffer[7];
      }
    
      private parseExtendedData(buffer: Buffer, result: any) {
        // Parse extended data based on sub signal
        const subSignal = buffer[4];
        
        switch (subSignal) {
          case 0x03: // Temperature sensors 2,3,4 and weight
            result.extended = {
              temperature2: this.parseTemperature(buffer.subarray(5, 7)),
              temperature3: this.parseTemperature(buffer.subarray(7, 9)),
              temperature4: this.parseTemperature(buffer.subarray(9, 11)),
              weight: (buffer[11] << 8) | buffer[12],
            };
            break;
            
          case 0x06: // Temperature and humidity
            result.extended = {
              temperature: {
                sign: buffer[6] === 1 ? -1 : 1,
                integer: buffer[7],
                decimal: buffer[8],
              },
              humidity: {
                integer: buffer[9],
                decimal: buffer[10],
              },
            };
            break;
            
          default:
            result.extended = {
              unknownSignal: subSignal,
              rawData: buffer.toString('hex'),
            };
            break;
        }
      }
    
      private parseTemperature(buffer: Buffer): number {
        const sign = buffer[0] === 0x01 ? -1 : 1;
        return sign * buffer[1];
      }
    
      private parseReplyToLocate(buffer: Buffer, result: any) {
        // Same format as position data (command 80)
        this.parsePositionData(buffer, result);
        result.message = 'Reply to locate immediately command';
      }
    
      private parseTrackerStatus(buffer: Buffer, result: any) {
        // Status data is 36 bytes after headers
        const statusData = buffer.slice(9, 9 + 36);
        
        result.status = {
          samplingTime: {
            year: 2000 + (statusData[0] >> 4) * 10 + (statusData[0] & 0x0F),
            month: (statusData[1] >> 4) * 10 + (statusData[1] & 0x0F),
            day: (statusData[2] >> 4) * 10 + (statusData[2] & 0x0F),
            hour: (statusData[3] >> 4) * 10 + (statusData[3] & 0x0F),
            minute: (statusData[4] >> 4) * 10 + (statusData[4] & 0x0F),
            second: (statusData[5] >> 4) * 10 + (statusData[5] & 0x0F),
          },
          alarmStatus: (statusData[6] << 8) | statusData[7],
          located: statusData[8] === 1,
          samplingType: statusData[9] === 1 ? 'fixed time' : 'fixed distance',
          samplingValue: (statusData[10] << 8) | statusData[11],
          sendingType: statusData[12] === 1 ? 'point send' : 'silence',
          carStopSetting: statusData[13],
          overspeedSetting: statusData[14],
          phoneLimit: statusData[15] === 1,
          areaNodeLimit: statusData[16] === 1,
          safeSetting: statusData[17],
          longTimeDriving: (statusData[18] << 8) | statusData[19],
          samplingValueAccOff: (statusData[20] << 8) | statusData[21],
          emergencyAlarmSwitch: statusData[22] === 1,
          photographRelated: statusData[23],
        };
      }
    
      private parseIButtonData(buffer: Buffer, result: any) {
        const subCommand = buffer[9];
        result.subCommand = subCommand;
        
        switch (subCommand) {
          case 0x06: // Anti-theft mode set successfully
          case 0x07: // Anti-theft mode set failed
          case 0x08: // Anti-theft mode cancelled
            result.message = `Anti-theft mode ${subCommand === 0x06 ? 'set' : subCommand === 0x07 ? 'set failed' : 'cancelled'}`;
            break;
            
          case 0x0A: // iButton ID setting
            const content = buffer.slice(10, buffer.length - 2).toString('ascii');
            const matches = content.match(/<([^,]+),([^>]+)>/);
            if (matches) {
              result.driver = {
                name: matches[1],
                iButtonId: matches[2],
              };
            }
            break;
            
          case 0x0B: // iButton swiping data
            const status = buffer[10];
            const dateTime = {
              year: 2000 + buffer[11],
              month: buffer[12],
              day: buffer[13],
              hour: buffer[14],
              minute: buffer[15],
              second: buffer[16],
            };
            
            // Parse coordinates (same as position data)
            const latSign = (buffer[17] & 0x80) ? -1 : 1;
            const latDegrees = (buffer[17] & 0x7F);
            const latMinutes = buffer[18] + (buffer[19] / 1000);
            
            const lonSign = (buffer[20] & 0x80) ? -1 : 1;
            const lonDegrees = (buffer[20] & 0x7F);
            const lonMinutes = buffer[21] + (buffer[22] / 1000);
            
            // Parse driver info
            const driverInfo = buffer.slice(23, buffer.length - 2).toString('ascii');
            const driverMatch = driverInfo.match(/<([^,]+),([^>]+)>/);
            
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
    
      private decodeLatitude(bytes) {
        if (bytes.length !== 4) {
            throw new Error('Se esperaban 4 bytes para latitud');
        }
      
        // Extraer signo (bit más significativo del primer byte)
        const isNorth = (bytes[0] & 0x80) === 0x00;
      
        // Decodificar grados (BCD) - primer byte sin el bit de signo
        const degrees = ((bytes[0] & 0x70) >> 4) + (bytes[0] & 0x0F)*10;
      
        // Decodificar minutos - interpretación alternativa
        // Asumiendo que bytes[1] contiene ya los minutos enteros en BCD
        const minutesInt = ((bytes[1] & 0xF0) >> 4) * 10 + (bytes[1] & 0x0F);
        
        // Parte decimal: bytes[2] y bytes[3] contienen los 3 dígitos decimales
        const minutesDecimal = (
            ((bytes[2] & 0xF0) >> 4) * 100 +  // primer dígito decimal
            (bytes[2] & 0x0F) * 10 +          // segundo dígito decimal
            ((bytes[3] & 0xF0) >> 4)          // tercer dígito decimal
        ) / 1000;
      
        const minutes = 10*(minutesInt + minutesDecimal); //trampa para que sea grados decimales
      
        // Convertir a grados decimales
        const dmsString = `${degrees}°${minutes.toFixed(3)}'${isNorth ? 'N' : 'S'}`;
        const decimalDegrees = parseDms(dmsString);
      
        return decimalDegrees
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

}
