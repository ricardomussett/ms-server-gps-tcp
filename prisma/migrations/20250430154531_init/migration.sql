-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "database" TEXT NOT NULL DEFAULT 'connected',
    "error" TEXT,
    "redis" TEXT NOT NULL DEFAULT 'connected',
    "tcpClients" INTEGER NOT NULL DEFAULT 0,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionData" (
    "id" SERIAL NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "sim" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "angle" DOUBLE PRECISION NOT NULL,
    "gpsStatus" TEXT NOT NULL,
    "digitalInputs" TEXT NOT NULL,
    "ignition" BOOLEAN NOT NULL,
    "oilResistance" INTEGER NOT NULL,
    "voltage" DOUBLE PRECISION NOT NULL,
    "mileage" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "overSpeed" TEXT NOT NULL,
    "nightTraffic" TEXT NOT NULL,
    "vehicleId" INTEGER,
    "vehiclePlate" TEXT,
    "vehicleColor" TEXT,
    "vehicleDistrict" TEXT,
    "blindAlarms" TEXT,
    "packetLength" INTEGER NOT NULL,
    "rawData" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PositionData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlarmData" (
    "id" SERIAL NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "sim" TEXT NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "centerEnabledAlarm" BOOLEAN NOT NULL,
    "crossBorder" BOOLEAN NOT NULL,
    "emergency" BOOLEAN NOT NULL,
    "enterBorder" BOOLEAN NOT NULL,
    "illegalDoorOpen" BOOLEAN NOT NULL,
    "illegalStart" BOOLEAN NOT NULL,
    "oilChange" BOOLEAN NOT NULL,
    "overSpeed" BOOLEAN NOT NULL,
    "overVoltage" BOOLEAN NOT NULL,
    "overload" BOOLEAN NOT NULL,
    "overtimeDriving" BOOLEAN NOT NULL,
    "parking" BOOLEAN NOT NULL,
    "powerFailure" BOOLEAN NOT NULL,
    "underVoltage" BOOLEAN NOT NULL,
    "vibration" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alarms" TEXT NOT NULL,
    "packetLength" INTEGER NOT NULL,
    "rawData" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlarmData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeartbeatData" (
    "id" SERIAL NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "sim" TEXT NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "calibrationValue" INTEGER NOT NULL,
    "mainOrderReply" INTEGER NOT NULL,
    "slaveOrderReply" INTEGER NOT NULL,
    "packetLength" INTEGER NOT NULL,
    "rawData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeartbeatData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackerStatus" (
    "id" SERIAL NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "sim" TEXT NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "samplingTime" TEXT NOT NULL,
    "alarmStatus" INTEGER,
    "located" BOOLEAN,
    "samplingType" TEXT,
    "samplingValue" INTEGER,
    "sendingType" TEXT,
    "carStopSetting" INTEGER,
    "overspeedSetting" INTEGER,
    "phoneLimit" BOOLEAN,
    "areaNodeLimit" BOOLEAN,
    "safeSetting" INTEGER,
    "longTimeDriving" INTEGER,
    "samplingValueAccOff" INTEGER,
    "emergencyAlarmSwitch" BOOLEAN,
    "photographRelated" INTEGER,
    "packetLength" INTEGER NOT NULL,
    "rawData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrackerStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IButtonData" (
    "id" SERIAL NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "sim" TEXT NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "subCommand" INTEGER,
    "message" TEXT,
    "driverName" TEXT,
    "driverId" TEXT,
    "swipeData" TEXT,
    "packetLength" INTEGER,
    "rawData" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IButtonData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhiteListPseudoIP" (
    "id" SERIAL NOT NULL,
    "PseudoIP" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhiteListPseudoIP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shiftRoute" (
    "id" SERIAL NOT NULL,
    "hour_start" TEXT NOT NULL,
    "hour_end" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shiftRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "limitSpeed" (
    "id" SERIAL NOT NULL,
    "speed_start" INTEGER NOT NULL,
    "speed_end" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "limitSpeed_pkey" PRIMARY KEY ("id")
);
