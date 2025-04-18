
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StatusScalarFieldEnum = {
  id: 'id',
  status: 'status',
  database: 'database',
  timestamp: 'timestamp',
  error: 'error',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  redis: 'redis',
  tcpClients: 'tcpClients'
};

exports.Prisma.GpsDataScalarFieldEnum = {
  id: 'id',
  rawData: 'rawData',
  timestamp: 'timestamp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  from: 'from',
  mainCommand: 'mainCommand',
  parsedData: 'parsedData',
  packetInfo: 'packetInfo'
};

exports.Prisma.PositionDataScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  latitude: 'latitude',
  longitude: 'longitude',
  speed: 'speed',
  angle: 'angle',
  gpsStatus: 'gpsStatus',
  digitalInputs: 'digitalInputs',
  ignition: 'ignition',
  oilResistance: 'oilResistance',
  voltage: 'voltage',
  mileage: 'mileage',
  temperature: 'temperature',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  mainCommand: 'mainCommand',
  packetLength: 'packetLength',
  pseudoIP: 'pseudoIP',
  rawData: 'rawData',
  timestamp: 'timestamp'
};

exports.Prisma.AlarmDataScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  alarms: 'alarms',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  mainCommand: 'mainCommand',
  packetLength: 'packetLength',
  pseudoIP: 'pseudoIP',
  rawData: 'rawData',
  centerEnabledAlarm: 'centerEnabledAlarm',
  crossBorder: 'crossBorder',
  emergency: 'emergency',
  enterBorder: 'enterBorder',
  illegalDoorOpen: 'illegalDoorOpen',
  illegalStart: 'illegalStart',
  oilChange: 'oilChange',
  overSpeed: 'overSpeed',
  overVoltage: 'overVoltage',
  overload: 'overload',
  overtimeDriving: 'overtimeDriving',
  parking: 'parking',
  powerFailure: 'powerFailure',
  underVoltage: 'underVoltage',
  vibration: 'vibration',
  timestamp: 'timestamp'
};

exports.Prisma.HeartbeatDataScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  calibrationValue: 'calibrationValue',
  mainOrderReply: 'mainOrderReply',
  slaveOrderReply: 'slaveOrderReply',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  mainCommand: 'mainCommand',
  packetLength: 'packetLength',
  pseudoIP: 'pseudoIP',
  rawData: 'rawData',
  timestamp: 'timestamp'
};

exports.Prisma.TrackerStatusScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  samplingTime: 'samplingTime',
  alarmStatus: 'alarmStatus',
  located: 'located',
  samplingType: 'samplingType',
  samplingValue: 'samplingValue',
  sendingType: 'sendingType',
  carStopSetting: 'carStopSetting',
  overspeedSetting: 'overspeedSetting',
  phoneLimit: 'phoneLimit',
  areaNodeLimit: 'areaNodeLimit',
  safeSetting: 'safeSetting',
  longTimeDriving: 'longTimeDriving',
  samplingValueAccOff: 'samplingValueAccOff',
  emergencyAlarmSwitch: 'emergencyAlarmSwitch',
  photographRelated: 'photographRelated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  mainCommand: 'mainCommand',
  packetLength: 'packetLength',
  pseudoIP: 'pseudoIP',
  rawData: 'rawData',
  timestamp: 'timestamp'
};

exports.Prisma.IButtonDataScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  subCommand: 'subCommand',
  message: 'message',
  driverName: 'driverName',
  driverId: 'driverId',
  swipeData: 'swipeData',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  mainCommand: 'mainCommand',
  packetLength: 'packetLength',
  pseudoIP: 'pseudoIP',
  rawData: 'rawData',
  timestamp: 'timestamp'
};

exports.Prisma.WhiteListPseudoIPScalarFieldEnum = {
  id: 'id',
  PseudoIP: 'PseudoIP',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Status: 'Status',
  GpsData: 'GpsData',
  PositionData: 'PositionData',
  AlarmData: 'AlarmData',
  HeartbeatData: 'HeartbeatData',
  TrackerStatus: 'TrackerStatus',
  IButtonData: 'IButtonData',
  WhiteListPseudoIP: 'WhiteListPseudoIP'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
