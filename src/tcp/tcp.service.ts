import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Server, Socket } from 'net';
import { QueueService } from '../queue/queue.service';
import { parseDms, Dms } from 'dms-conversion';
import { COMMAND_CODES, GPS_STATUS, ALARM_STATUS, DIGITAL_INPUTS, IGNITION_STATUS } from './enums/code.enum';

@Injectable()
export class TcpService implements OnModuleInit, OnModuleDestroy {
  private server: Server;
  private clients: Map<string, Socket> = new Map();
  private readonly logger = new Logger(TcpService.name);

  constructor(private readonly queueService: QueueService) {
    this.server = new Server();
  }

  async onModuleInit() {
    this.setupServer();
  }

  async onModuleDestroy() {
    await this.closeServer();
  }

  private decodePseudoIp(pseudoIp: Buffer): string {
    // Convertir cada byte a decimal y unirlos con puntos
    return Array.from(pseudoIp).join('.');
  }

  private setupServer() {
    this.server.on('connection', (socket: Socket) => {
      const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
      this.logger.log(`Cliente conectado: ${clientId}`);
      this.clients.set(clientId, socket);

      socket.on('data', async (data: Buffer) => {
        try {
          // data [Nest] 18  - 04/15/2025, 8:46:40 PM     LOG [TcpService] Datos recibidos (hex): 24242100066204c724a20d
          // Imprimir datos de entrada en formato hexadecimal
          this.logger.log(`Datos recibidos (hex): ${data.toString('hex')}`);
          this.logger.log(`Datos recibidos (raw): ${data.toString()}`);

          // validar longitud del paquete
          if (data.length < 6) {
            this.logger.warn(`Paquete inválido por longitud`);
            return;
          }

          // Verificar el header del paquete
          if (data[0] !== 0x24 || data[1] !== 0x24) {
            this.logger.warn(`Paquete inválido recibido de ${clientId}: Header incorrecto`);
            return;
          }

          // Extraer información del paquete
          const packetType = data[2];
          const length = data.readUInt16BE(3);
          const pseudoIp = data.subarray(5, 9);
          const payload = data.subarray(9, 9 + length);
          const checksum = data[data.length - 2];  // Checksum es el penúltimo byte
          const footer = data[data.length - 1];    // Footer es el último byte

          // Log de depuración
          this.logger.log(`Packet info - Type: ${packetType}, Length: ${length}, Footer position: ${data.length - 1}, Footer value: ${footer.toString(16)}`);

          // Verificar footer
          if (footer !== 0x0D) {
            this.logger.warn(`Paquete inválido recibido de ${clientId}: Footer incorrecto (${footer.toString(16)})`);
            return;
          }

          // Verificar checksum
          const calculatedChecksum = this.calculateXor(data.subarray(2, data.length - 2));
          if (calculatedChecksum !== checksum) {
            this.logger.warn(`Paquete inválido recibido de ${clientId}: Checksum incorrecto`);
            return;
          }

          // Decodificar la pseudoIP
          const decodedPseudoIp = this.decodePseudoIp(pseudoIp);

          // Crea el objeto con la informacion del paquete
          const packetInfo = {
            packetType,
            length,
            pseudoIp: decodedPseudoIp,
            payload: payload.toString('hex'),
            checksum
          };

          this.logger.log(`Paquete recibido de ${clientId}: ${JSON.stringify(packetInfo)}`);

          // Procesar los datos GPS
          const parsedData = this.parseGpsData(data, packetInfo, clientId);
          
          // Agrega los datos a la cola
          const job = await this.queueService.addGpsData({
            parsedData
          }, 'gps');

          this.logger.log(`Datos enviados a la cola con jobId: ${job.id}`);

        } catch (error) {
          this.logger.error(`Error procesando datos de ${clientId}: ${error.message}`, error.stack);
        }
      });

      socket.on('error', (error) => {
        this.logger.error(`Error en socket ${clientId}: ${error.message}`, error.stack);
        this.clients.delete(clientId);
      });

      socket.on('close', () => {
        this.logger.log(`Cliente desconectado: ${clientId}`);
        this.clients.delete(clientId);
      });
    });

    this.server.listen(process.env.TCP_PORT ?? 3001, () => {
      this.logger.log(`Servidor TCP escuchando en puerto ${process.env.TCP_PORT ?? 3001}`);
    });
  }

  private calculateXor(buffer: Buffer): number {
    console.log(buffer);
    let checksum = 0;
    for (let i = 0; i < buffer.length; i++) {
      checksum ^= buffer[i];
    }
    console.log('checksum', checksum);
    return checksum;
  }

  private async closeServer() {
    return new Promise<void>((resolve) => {
      this.server.close(() => {
        this.logger.log('Servidor TCP cerrado');
        resolve();
      });

      this.clients.forEach((socket) => {
        socket.destroy();
      });
      this.clients.clear();
    });
  }

  public getConnectedClients(): number {
    return this.clients.size;
  }

  private parseGpsData(buffer: Buffer, packetInfo: any, clientId: string): any {
    // Convert raw data to Buffer if it's a string
    const data = buffer;

    // Extract main command
    const mainCommand = data[2].toString(16).padStart(2, '0').toUpperCase();
    const packetType = packetInfo.packetType;
    const packetLength = packetInfo.length;
    const pseudoIP = packetInfo.pseudoIp;
    const payload = packetInfo.payload;
    const checksum = packetInfo.checksum;

    // Initialize result object
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

    // Process according to main command
    switch (mainCommand) {
      case COMMAND_CODES.POSITION_DATA: // Position data
        this.parsePositionData(data, result);
        break;
        
      case COMMAND_CODES.ALARM_DATA: // Alarm data
        this.parseAlarmData(data, result);
        break;
        
      case COMMAND_CODES.HEARTBEAT: // Heartbeat
        this.parseHeartbeatData(data, result);
        break;
        
      case COMMAND_CODES.REPLY_TO_LOCATE: // Reply to locate immediately
        this.parseReplyToLocate(data, result);
        break;
        
      case COMMAND_CODES.TRACKER_STATUS: // Tracker parameters and status
        this.parseTrackerStatus(data, result);
        break;
        
      case COMMAND_CODES.IBUTTON_DATA: // iButton data
        this.parseIButtonData(data, result);
        break;
        
      default:
        result.message = 'Unknown command type';
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
    const degrees = ((bytes[0] & 0x70) >> 4) * 10 + (bytes[0] & 0x0F);
  
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
  
  private decodeLongitude(bytes) {
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
  
    return decimalDegrees
  }
    
  private decodeSpeed(bytes) {
    const speed = (bytes[0] >> 4) * 1000 + 
    (bytes[0] & 0x0F) * 100 +
    (bytes[1] >> 4) * 10 + 
    (bytes[1] & 0x0F);
  
    return speed;
  }
  
  private decodeAngle(bytes) {
    const angle = (bytes[0] & 0xFF) * 100 +  // Toma el byte completo como centenas
    ((bytes[1] & 0xF0) >> 4) * 10 +  // Toma el nibble superior como decenas
    (bytes[1] & 0x0F);  // Toma el nibble inferior como unidades
  
    return angle;
  }
  
  private decodeOilResistance(bytes) {
    const oilResistance = (bytes[0] << 8) | bytes[1];
    return oilResistance;
  }
  
  private decodeVoltage(bytes) {
    const voltage = ((bytes[0] << 8) | bytes[1]) / 100;
    return voltage;
  }
  
  private decodeMileage(bytes) {
    const mileage = (bytes[0] << 24) | 
                    (bytes[1] << 16) | 
                    (bytes[2] << 8) | 
                    bytes[3];
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

  private decodeIgnition(bytes) {
    return bytes === IGNITION_STATUS.ON;
  }

  private decodeTemperature(bytes) {
    const tempSign = bytes === 0x01 ? -1 : 1;
    return tempSign * bytes;
  }

  private decodeTimestamp(bytes) {
    const dateTime = {
      year: 2000 + (bytes[0] >> 4) * 10 + (bytes[0] & 0x0F),
      month: (bytes[1] >> 4) * 10 + (bytes[1] & 0x0F),
      day: (bytes[2] >> 4) * 10 + (bytes[2] & 0x0F),
      hour: (bytes[3] >> 4) * 10 + (bytes[3] & 0x0F),
      minute: (bytes[4] >> 4) * 10 + (bytes[4] & 0x0F),
      second: (bytes[5] >> 4) * 10 + (bytes[5] & 0x0F),
    };
    const timestamp = new Date(
      dateTime.year, dateTime.month - 1, dateTime.day,
      dateTime.hour, dateTime.minute, dateTime.second
    );

    return timestamp;
  }
}

