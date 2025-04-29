import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/prisma/service/prisma.service'
import {
  AlarmData,
  HeartbeatData,
  IButtonData,
  PositionData,
  TrackerStatusData,
} from '../interface/proccessor.interface'
import { Prisma } from 'generated/prisma'

@Injectable()
export class ProccessorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPositionData(positionData: { data: PositionData[] }): Promise<Prisma.BatchPayload> {
    return await this.prisma.positionData.createMany({
      data: positionData.data.map((data) => ({
        clientId: data.clientId,
        mainCommand: data.mainCommand,
        packetLength: data.packetLength,
        pseudoIP: data.pseudoIP,
        sim: data.sim,
        blindAlarms: JSON.stringify(data.blindAlarms),
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
        timestamp: data.timestamp,
      })),
    })
  }

  async createAlarmData(alarmData: { data: AlarmData[] }): Promise<Prisma.BatchPayload> {
    return await this.prisma.alarmData.createMany({
      data: alarmData.data.map((data) => ({
        clientId: data.clientId,
        mainCommand: data.mainCommand,
        packetLength: data.packetLength,
        pseudoIP: data.pseudoIP,
        sim: data.sim,
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
        timestamp: data.timestamp,
      })),
    })
  }

  async createHeartbeatData(heartbeatData: { data: HeartbeatData[] }): Promise<Prisma.BatchPayload> {
    return await this.prisma.heartbeatData.createMany({
      data: heartbeatData.data.map((data) => ({
        clientId: data.clientId,
        mainCommand: data.mainCommand,
        packetLength: data.packetLength,
        pseudoIP: data.pseudoIP,
        sim: data.sim,
        rawData: data.rawData,
        calibrationValue: data.calibrationValue,
        mainOrderReply: data.mainOrderReply,
        slaveOrderReply: data.slaveOrderReply,
        timestamp: data.timestamp,
      })),
    })
  }

  async createTrackerStatusData(trackerStatusData: { data: TrackerStatusData[] }): Promise<Prisma.BatchPayload> {
    return await this.prisma.trackerStatus.createMany({
      data: trackerStatusData.data.map((data) => ({
        clientId: data.clientId,
        mainCommand: data.mainCommand,
        packetLength: data.packetLength,
        pseudoIP: data.pseudoIP,
        sim: data.sim,
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
        timestamp: data.timestamp,
      })),
    })
  }

  async createIButtonData(ibuttonData: { data: IButtonData[] }): Promise<Prisma.BatchPayload> {
    return await this.prisma.iButtonData.createMany({
      data: ibuttonData.data.map((data) => ({
        clientId: data.clientId,
        mainCommand: data.mainCommand,
        packetLength: data.packetLength,
        pseudoIP: data.pseudoIP,
        sim: data.sim,
        rawData: data.rawData,
        subCommand: data.subCommand,
        message: data.message,
        driverName: data.driverName,
        driverId: data.driverId,
        swipeData: JSON.stringify(data.swipeData),
        timestamp: data.timestamp,
      })),
    })
  }
}
