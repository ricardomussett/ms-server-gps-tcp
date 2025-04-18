import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { QueueService } from '../../queue/service/queue.service';
import { PositionData, AlarmData, HeartbeatData, TrackerStatusData, IButtonData } from '../interface/proccessor.interface';
import { COMMAND_CODES } from '../enums/code.enums';
import { Job } from 'bull';
import { Redis } from 'ioredis';

@Injectable()
export class ProccessorService {
  private readonly logger = new Logger(ProccessorService.name);
  private readonly redis: Redis;
  private positionDataBuffer: PositionData[] = [];
  private alarmDataBuffer: AlarmData[] = [];
  private heartbeatDataBuffer: HeartbeatData[] = [];
  private trackerStatusBuffer: TrackerStatusData[] = [];
  private iButtonDataBuffer: IButtonData[] = [];
  private readonly BUFFER_SIZE = 50; // Tamaño del buffer para procesamiento por lotes

  constructor(
    private prisma: PrismaService,
    private queueService: QueueService
  ) {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      db: parseInt(process.env.REDIS_DB || '1')
    });
  }

  /**
   * Procesa y almacena los datos de posición GPS
   */
  private async processPositionData(parsedData: PositionData): Promise<void> {
    try {
      // Agregar al buffer
      this.positionDataBuffer.push(parsedData);

      // Si el buffer alcanza el tamaño máximo, procesar el lote
      if (this.positionDataBuffer.length >= this.BUFFER_SIZE) {
        await this.flushPositionDataBuffer();
      }

      // Guardar en Redis
      const truckKey = `${process.env.REDIS_KEY_PREFIX || 'truck'}:${parsedData.pseudoIP}`;
      await this.redis.hset(truckKey, {
        latitude: parsedData.latitude?.toString() || '0',
        longitude: parsedData.longitude?.toString() || '0',
        speed: parsedData.speed?.toString() || '0',
        angle: parsedData.angle?.toString() || '0',
        ignition: parsedData.ignition ? '1' : '0',
        voltage: parsedData.voltage?.toString() || '0',
        mileage: parsedData.mileage?.toString() || '0',
        temperature: parsedData.temperature?.toString() || '0',
        lastUpdate: new Date().toISOString()
      });

      this.logger.log(`Datos de posición procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de posición: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa el buffer de datos de posición
   */
  private async flushPositionDataBuffer(): Promise<void> {
    if (this.positionDataBuffer.length === 0) return;

    try {
      await this.prisma.positionData.createMany({
        data: this.positionDataBuffer.map(data => ({
          clientId: data.clientId,
          mainCommand: data.mainCommand,
          packetLength: data.packetLength,
          pseudoIP: data.pseudoIP,
          rawData: data.rawData,
          latitude: data.latitude ?? 0,
          longitude: data.longitude ?? 0,
          speed: data.speed ?? 0,
          angle: data.angle ?? 0,
          gpsStatus: JSON.stringify(data.gpsStatus),
          digitalInputs: JSON.stringify(data.digitalInputs),
          ignition: data.ignition,
          oilResistance: data.oilResistance,
          voltage: data.voltage,
          mileage: data.mileage,
          temperature: data.temperature,
          timestamp: data.timestamp
        }))
      });

      this.logger.log(`Procesado lote de ${this.positionDataBuffer.length} registros de posición`);
      this.positionDataBuffer = [];
    } catch (error) {
      this.logger.error(`Error al procesar buffer de posición: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos de alarmas
   */
  private async processAlarmData(parsedData: AlarmData): Promise<void> {
    try {
      // Agregar al buffer
      this.alarmDataBuffer.push(parsedData);

      // Si el buffer alcanza el tamaño máximo, procesar el lote
      if (this.alarmDataBuffer.length >= this.BUFFER_SIZE) {
        await this.flushAlarmDataBuffer();
      }

      this.logger.log(`Datos de alarma procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de alarma: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa el buffer de datos de alarma
   */
  private async flushAlarmDataBuffer(): Promise<void> {
    if (this.alarmDataBuffer.length === 0) return;

    try {
      await this.prisma.alarmData.createMany({
        data: this.alarmDataBuffer.map(data => ({
          clientId: data.clientId,
          mainCommand: data.mainCommand,
          packetLength: data.packetLength,
          pseudoIP: data.pseudoIP,
          rawData: data.rawData,
          alarms: JSON.stringify(data.alarms),
          oilChange: data.alarms?.oilChange,
          crossBorder: data.alarms?.crossBorder,
          overVoltage: data.alarms?.overVoltage,
          underVoltage: data.alarms?.underVoltage,
          overload: data.alarms?.overload,
          overtimeDriving: data.alarms?.overtimeDriving,
          enterBorder: data.alarms?.enterBorder,
          illegalDoorOpen: data.alarms?.illegalDoorOpen,
          illegalStart: data.alarms?.illegalStart,
          vibration: data.alarms?.vibration,
          centerEnabledAlarm: data.alarms?.centerEnabledAlarm,
          powerFailure: data.alarms?.powerFailure,
          parking: data.alarms?.parking,
          overSpeed: data.alarms?.overSpeed,
          emergency: data.alarms?.emergency,
          timestamp: data.timestamp
        }))
      });

      this.logger.log(`Procesado lote de ${this.alarmDataBuffer.length} registros de alarma`);
      this.alarmDataBuffer = [];
    } catch (error) {
      this.logger.error(`Error al procesar buffer de alarma: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos de heartbeat
   */
  private async processHeartbeatData(parsedData: HeartbeatData): Promise<void> {
    try {
      // Agregar al buffer
      this.heartbeatDataBuffer.push(parsedData);

      // Si el buffer alcanza el tamaño máximo, procesar el lote
      if (this.heartbeatDataBuffer.length >= this.BUFFER_SIZE) {
        await this.flushHeartbeatDataBuffer();
      }

      this.logger.log(`Datos de heartbeat procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de heartbeat: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa el buffer de datos de heartbeat
   */
  private async flushHeartbeatDataBuffer(): Promise<void> {
    if (this.heartbeatDataBuffer.length === 0) return;

    try {
      await this.prisma.heartbeatData.createMany({
        data: this.heartbeatDataBuffer.map(data => ({
          clientId: data.clientId,
          mainCommand: data.mainCommand,
          packetLength: data.packetLength,
          pseudoIP: data.pseudoIP,
          rawData: data.rawData,
          calibrationValue: data.calibrationValue,
          mainOrderReply: data.mainOrderReply,
          slaveOrderReply: data.slaveOrderReply,
          timestamp: data.timestamp
        }))
      });

      this.logger.log(`Procesado lote de ${this.heartbeatDataBuffer.length} registros de heartbeat`);
      this.heartbeatDataBuffer = [];
    } catch (error) {
      this.logger.error(`Error al procesar buffer de heartbeat: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos de estado del rastreador
   */
  private async processTrackerStatus(parsedData: TrackerStatusData): Promise<void> {
    try {
      // Agregar al buffer
      this.trackerStatusBuffer.push(parsedData);

      // Si el buffer alcanza el tamaño máximo, procesar el lote
      if (this.trackerStatusBuffer.length >= this.BUFFER_SIZE) {
        await this.flushTrackerStatusBuffer();
      }

      this.logger.log(`Estado del rastreador procesado correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar estado del rastreador: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa el buffer de datos de estado del rastreador
   */
  private async flushTrackerStatusBuffer(): Promise<void> {
    if (this.trackerStatusBuffer.length === 0) return;

    try {
      await this.prisma.trackerStatus.createMany({
        data: this.trackerStatusBuffer.map(data => ({
          clientId: data.clientId,
          mainCommand: data.mainCommand,
          packetLength: data.packetLength,
          pseudoIP: data.pseudoIP,
          rawData: data.rawData,
          samplingTime: data.samplingTime,
          alarmStatus: data.alarmStatus,
          located: data.located,
          samplingType: data.samplingType,
          samplingValue: data.samplingValue,
          sendingType: data.sendingType,
          carStopSetting: data.carStopSetting,
          overspeedSetting: data.overspeedSetting,
          phoneLimit: data.phoneLimit,
          areaNodeLimit: data.areaNodeLimit,
          safeSetting: data.safeSetting,
          longTimeDriving: data.longTimeDriving,
          samplingValueAccOff: data.samplingValueAccOff,
          emergencyAlarmSwitch: data.emergencyAlarmSwitch,
          photographRelated: data.photographRelated,
          timestamp: data.timestamp
        }))
      });

      this.logger.log(`Procesado lote de ${this.trackerStatusBuffer.length} registros de estado del rastreador`);
      this.trackerStatusBuffer = [];
    } catch (error) {
      this.logger.error(`Error al procesar buffer de estado del rastreador: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos del iButton
   */
  private async processIButtonData(parsedData: IButtonData): Promise<void> {
    try {
      // Agregar al buffer
      this.iButtonDataBuffer.push(parsedData);

      // Si el buffer alcanza el tamaño máximo, procesar el lote
      if (this.iButtonDataBuffer.length >= this.BUFFER_SIZE) {
        await this.flushIButtonDataBuffer();
      }

      this.logger.log(`Datos de iButton procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de iButton: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa el buffer de datos del iButton
   */
  private async flushIButtonDataBuffer(): Promise<void> {
    if (this.iButtonDataBuffer.length === 0) return;

    try {
      await this.prisma.iButtonData.createMany({
        data: this.iButtonDataBuffer.map(data => ({
          clientId: data.clientId,
          mainCommand: data.mainCommand,
          packetLength: data.packetLength,
          pseudoIP: data.pseudoIP,
          rawData: data.rawData,
          subCommand: data.subCommand,
          message: data.message,
          driverName: data.driverName,
          driverId: data.driverId,
          swipeData: JSON.stringify(data.swipeData),
          timestamp: data.timestamp
        }))
      });

      this.logger.log(`Procesado lote de ${this.iButtonDataBuffer.length} registros de iButton`);
      this.iButtonDataBuffer = [];
    } catch (error) {
      this.logger.error(`Error al procesar buffer de iButton: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa los datos GPS desde la cola de Redis
   */
  async processGpsDataFromQueue(job: Job): Promise<void> {
    try {
      const { parsedData } = job.data;
      
      const commandProcessors = {
        [COMMAND_CODES.POSITION_DATA]: this.processPositionData.bind(this),
        [COMMAND_CODES.ALARM_DATA]: this.processAlarmData.bind(this),
        [COMMAND_CODES.HEARTBEAT]: this.processHeartbeatData.bind(this),
        [COMMAND_CODES.TRACKER_STATUS]: this.processTrackerStatus.bind(this),
        [COMMAND_CODES.IBUTTON_DATA]: this.processIButtonData.bind(this)
      };

      const processor = commandProcessors[parsedData.mainCommand];
      
      if (processor) {
        await processor(parsedData);
        this.logger.log(`Datos GPS procesados correctamente desde la cola. ID: ${job.id}`);
      } else {
        this.logger.warn(`Comando no reconocido en la cola: ${parsedData.mainCommand}`);
      }
    } catch (error) {
      this.logger.error(`Error al procesar datos GPS desde la cola: ${error.message}`);
      throw error;
    }
  }
}

