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

  constructor(
    private prisma: PrismaService,
    private queueService: QueueService
  ) {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      db: 1
    });
  }

  /**
   * Procesa y almacena los datos de posición GPS
   */
  private async processPositionData(parsedData: PositionData): Promise<void> {
    try {
      // Guardar en PostgreSQL
      const positionData = await this.prisma.positionData.create({
        data: {
          clientId: parsedData.clientId,
          mainCommand: parsedData.mainCommand,
          packetLength: parsedData.packetLength,
          pseudoIP: parsedData.pseudoIP,
          rawData: parsedData.rawData,
          latitude: parsedData.latitude ?? 0,
          longitude: parsedData.longitude ?? 0,
          speed: parsedData.speed ?? 0,
          angle: parsedData.angle ?? 0,
          gpsStatus: JSON.stringify(parsedData.gpsStatus),
          digitalInputs: JSON.stringify(parsedData.digitalInputs),
          ignition: parsedData.ignition,
          oilResistance: parsedData.oilResistance,
          voltage: parsedData.voltage,
          mileage: parsedData.mileage,
          temperature: parsedData.temperature,
          timestamp: parsedData.timestamp
        }
      });

      // Guardar en Redis
      const truckKey = `truck:${parsedData.pseudoIP}`;
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
   * Procesa y almacena los datos de alarmas
   */
  private async processAlarmData(parsedData: AlarmData): Promise<void> {
    try {
      await this.prisma.alarmData.create({
        data: {
          clientId: parsedData.clientId,
          mainCommand: parsedData.mainCommand,
          packetLength: parsedData.packetLength,
          pseudoIP: parsedData.pseudoIP,
          rawData: parsedData.rawData,
          alarms: JSON.stringify(parsedData.alarms),
          oilChange: parsedData.alarms?.oilChange,
          crossBorder: parsedData.alarms?.crossBorder,
          overVoltage: parsedData.alarms?.overVoltage,
          underVoltage: parsedData.alarms?.underVoltage,
          overload: parsedData.alarms?.overload,
          overtimeDriving: parsedData.alarms?.overtimeDriving,
          enterBorder: parsedData.alarms?.enterBorder,
          illegalDoorOpen: parsedData.alarms?.illegalDoorOpen,
          illegalStart: parsedData.alarms?.illegalStart,
          vibration: parsedData.alarms?.vibration,
          centerEnabledAlarm: parsedData.alarms?.centerEnabledAlarm,
          powerFailure: parsedData.alarms?.powerFailure,
          parking: parsedData.alarms?.parking,
          overSpeed: parsedData.alarms?.overSpeed,
          emergency: parsedData.alarms?.emergency,
          timestamp: parsedData.timestamp
        }
      });
      this.logger.log(`Datos de alarma procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de alarma: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos de heartbeat
   */
  private async processHeartbeatData(parsedData: HeartbeatData): Promise<void> {
    try {
      await this.prisma.heartbeatData.create({
        data: {
          clientId: parsedData.clientId,
          mainCommand: parsedData.mainCommand,
          packetLength: parsedData.packetLength,
          pseudoIP: parsedData.pseudoIP,
          rawData: parsedData.rawData,
          calibrationValue: parsedData.calibrationValue,
          mainOrderReply: parsedData.mainOrderReply,
          slaveOrderReply: parsedData.slaveOrderReply,
          timestamp: parsedData.timestamp,
        }
      });
      this.logger.log(`Datos de heartbeat procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de heartbeat: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos de estado del rastreador
   */
  private async processTrackerStatus(parsedData: TrackerStatusData): Promise<void> {
    try {
      await this.prisma.trackerStatus.create({
        data: {
          clientId: parsedData.clientId,
          mainCommand: parsedData.mainCommand,
          packetLength: parsedData.packetLength,
          pseudoIP: parsedData.pseudoIP,
          rawData: parsedData.rawData,
          samplingTime: parsedData.samplingTime,
          alarmStatus: parsedData.alarmStatus,
          located: parsedData.located,
          samplingType: parsedData.samplingType,
          samplingValue: parsedData.samplingValue,
          sendingType: parsedData.sendingType,
          carStopSetting: parsedData.carStopSetting,
          overspeedSetting: parsedData.overspeedSetting,
          phoneLimit: parsedData.phoneLimit,
          areaNodeLimit: parsedData.areaNodeLimit,
          safeSetting: parsedData.safeSetting,
          longTimeDriving: parsedData.longTimeDriving,
          samplingValueAccOff: parsedData.samplingValueAccOff,
          emergencyAlarmSwitch: parsedData.emergencyAlarmSwitch,
          photographRelated: parsedData.photographRelated,
          timestamp: parsedData.timestamp,
        }
      });
      this.logger.log(`Estado del rastreador procesado correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar estado del rastreador: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa y almacena los datos del iButton
   */
  private async processIButtonData(parsedData: IButtonData): Promise<void> {
    try {
      await this.prisma.iButtonData.create({
        data: {
          clientId: parsedData.clientId,
          mainCommand: parsedData.mainCommand,
          packetLength: parsedData.packetLength,
          pseudoIP: parsedData.pseudoIP,
          rawData: parsedData.rawData,
          subCommand: parsedData.subCommand,
          message: parsedData.message,
          driverName: parsedData.driverName,
          driverId: parsedData.driverId,
          swipeData: JSON.stringify(parsedData.swipeData),
          timestamp: parsedData.timestamp,
        }
      });
      this.logger.log(`Datos de iButton procesados correctamente para IP: ${parsedData.pseudoIP}`);
    } catch (error) {
      this.logger.error(`Error al procesar datos de iButton: ${error.message}`);
      throw error;
    }
  }

  /**
   * Procesa los datos GPS desde la cola de Redis
   */
  async processGpsDataFromQueue(job: Job): Promise<void> {
    try {
      const { parsedData } = job.data;

      this.logger.log(`Datos procesados: ${JSON.stringify(parsedData)}`);
      
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

