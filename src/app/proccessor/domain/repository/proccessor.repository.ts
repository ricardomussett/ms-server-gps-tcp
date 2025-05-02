import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/prisma/service/prisma.service'
import {
  AlarmData,
  HeartbeatData,
  IButtonData,
  PositionData,
  PositionDataResult,
  TrackerStatusData,
} from '../interface/proccessor.interface'
import { Prisma } from 'generated/prisma'

@Injectable()
export class ProccessorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPositionData(positionDataResult: { data: PositionDataResult[] }): Promise<Prisma.BatchPayload> {
    return await this.prisma.positionData.createMany({
      data: positionDataResult.data.map((data) => ({
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
        overSpeed: data.overSpeed,
        nightTraffic: data.nightTraffic,
        vehicleId: data.vehicleId,
        vehiclePlate: data.vehiclePlate,
        vehicleColor: data.vehicleColor,
        vehicleDistrict: data.vehicleDistrict,
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
        oilChange: data.alarms?.oilChange ?? false,
        crossBorder: data.alarms?.crossBorder ?? false,
        overVoltage: data.alarms?.overVoltage ?? false,
        underVoltage: data.alarms?.underVoltage ?? false,
        overload: data.alarms?.overload ?? false,
        overtimeDriving: data.alarms?.overtimeDriving ?? false,
        enterBorder: data.alarms?.enterBorder ?? false,
        illegalDoorOpen: data.alarms?.illegalDoorOpen ?? false,
        illegalStart: data.alarms?.illegalStart ?? false,
        vibration: data.alarms?.vibration ?? false,
        centerEnabledAlarm: data.alarms?.centerEnabledAlarm ?? false,
        powerFailure: data.alarms?.powerFailure ?? false,
        parking: data.alarms?.parking ?? false,
        overSpeed: data.alarms?.overSpeed ?? false,
        emergency: data.alarms?.emergency ?? false,
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
