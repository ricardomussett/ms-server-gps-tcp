import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PrismaService } from '../prisma/prisma.service';
import { Logger } from '@nestjs/common';
import { COMMAND_CODES } from './enums/code.enums';

@Processor('gps-data')
export class GpsDataProcessor {
  private readonly logger = new Logger(GpsDataProcessor.name);

  constructor(private prisma: PrismaService) {}

  @Process('gps')
  async handleGpsData(job: Job) {
    try {

      console.log(job.data);

      const { parsedData } = job.data;
      

      // Según el mainCommand, guardamos en la tabla específica
      switch (parsedData.mainCommand) {
        case COMMAND_CODES.POSITION_DATA: // Position data:
          await this.prisma.positionData.create({
        data: {
          mainCommand: parsedData.mainCommand,
              packetLength: parsedData.packetLength,
              pseudoIP: parsedData.pseudoIP,
              rawData: parsedData.rawData,
              latitude: parsedData.latitude,
              longitude: parsedData.longitude,
              speed: parsedData.speed,
              angle: parsedData.angle,
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
        break;
        
          case '82': // Alarm data
          await this.prisma.alarmData.create({
            data: {
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
        break;
        
        case COMMAND_CODES.HEARTBEAT: // Heartbeat
          await this.prisma.heartbeatData.create({
            data: {
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
        break;
        
        case COMMAND_CODES.TRACKER_STATUS: // Tracker parameters and status
          await this.prisma.trackerStatus.create({
            data: {
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
        break;
        
        case COMMAND_CODES.IBUTTON_DATA: // iButton data
          await this.prisma.iButtonData.create({
            data: {
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
        break;
    }

      this.logger.log(`Datos GPS procesados y guardados correctamente. ID: ${parsedData.gpsDataId}`);
    } catch (error) {
      this.logger.error('Error al procesar datos GPS:', error);
      throw error;
    }
  }
}