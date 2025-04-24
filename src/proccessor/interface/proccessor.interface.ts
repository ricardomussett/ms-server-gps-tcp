/**
 * Interface para los datos de estado del GPS
 */
export interface GpsStatus {
    located: boolean;
    differential: boolean; 
    satellites: number;
}

/**
 * Interface para las entradas digitales
 */
export interface DigitalInputs {
    systemUse: boolean;
    input1: boolean;
    antennaShort: boolean;
    antennaOpen: boolean;
    input2: boolean;
    input3: boolean;
    input4: boolean;
}

/**
 * Interface para los datos de posición del GPS
 */
export interface PositionData {
    clientId: string;
    mainCommand: string;
    packetLength: number;
    pseudoIP: string;
    sim: string;
    rawData: string;
    latitude?: number;
    longitude?: number;
    speed?: number;
    angle?: number;
    gpsStatus?: GpsStatus;
    digitalInputs?: DigitalInputs;
    ignition?: boolean;
    oilResistance?: number;
    voltage?: number;
    mileage?: number;
    temperature?: number;
    timestamp?: Date;
}

/**
 * Interface para los datos de alarmas
 */
export interface AlarmFlags {
    oilChange?: boolean;
    crossBorder?: boolean;
    overVoltage?: boolean;
    underVoltage?: boolean;
    overload?: boolean;
    overtimeDriving?: boolean;
    enterBorder?: boolean;
    illegalDoorOpen?: boolean;
    illegalStart?: boolean;
    vibration?: boolean;
    centerEnabledAlarm?: boolean;
    powerFailure?: boolean;
    parking?: boolean;
    overSpeed?: boolean;
    emergency?: boolean;
}

/**
 * Interface para los datos de alarma
 */
export interface AlarmData {
    clientId: string;
    mainCommand: string;
    packetLength: number;
    pseudoIP: string;
    sim: string;
    rawData: string;
    alarms?: AlarmFlags;
    timestamp?: Date;
}

/**
 * Interface para los datos de HeartbeatData
 */
export interface HeartbeatData {
    clientId: string;
    mainCommand: string;
    packetLength: number;
    pseudoIP: string;
    sim: string;
    rawData: string;
    calibrationValue: number;
    mainOrderReply: number;
    slaveOrderReply: number;
    timestamp: Date;
}

/**
 * Interface para los datos de TrackerStatusData
 */
export interface TrackerStatusData {
    clientId: string;
    mainCommand: string;
    packetLength: number;
    pseudoIP: string;
    sim: string;
    rawData: string;
    samplingTime: string;
    alarmStatus: number;
    located: boolean;
    samplingType: string;
    samplingValue: number;
    sendingType: string;
    carStopSetting: number;
    overspeedSetting: number;
    phoneLimit: boolean | null;
    areaNodeLimit: boolean | null;
    safeSetting: number;
    longTimeDriving: number;
    samplingValueAccOff: number;
    emergencyAlarmSwitch: boolean;
    photographRelated: number;
    timestamp: Date;
}

/**
 * Interface para los datos de deslizamiento del iButton
 */
export interface IButtonSwipeData {
    swipeTime: Date;
    swipeType: string;
    swipeResult: string;
}

/**
 * Interface para los datos de IButtonData
 */
export interface IButtonData {
    clientId: string;
    mainCommand: string;
    packetLength: number;
    pseudoIP: string;
    sim: string;
    rawData: string;
    subCommand: number;
    message: string;
    driverName: string;
    driverId: string;
    swipeData: IButtonSwipeData;
    timestamp: Date;
}

export interface Vehicle {
    id: number;
    plate: string;
    model: string;
    pseudoIP: string;
    driverName: string;
  }