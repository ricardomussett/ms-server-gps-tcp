-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "database" TEXT NOT NULL DEFAULT 'connected',
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "redis" TEXT NOT NULL DEFAULT 'connected',
    "tcpClients" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GpsData" (
    "id" SERIAL NOT NULL,
    "rawData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "from" TEXT NOT NULL,
    "mainCommand" TEXT,
    "parsedData" TEXT,
    "packetInfo" TEXT,

    CONSTRAINT "GpsData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionData" (
    "id" SERIAL NOT NULL,
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
    "blindAlarms" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "packetLength" INTEGER NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "rawData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "sim" TEXT NOT NULL,
    "overSpeed" TEXT NOT NULL,
    "nightTraffic" TEXT NOT NULL,
    "vehicleId" INTEGER,
    "vehiclePlate" TEXT,
    "vehicleColor" TEXT,

    CONSTRAINT "PositionData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlarmData" (
    "id" SERIAL NOT NULL,
    "alarms" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "packetLength" INTEGER NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "rawData" TEXT NOT NULL,
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
    "clientId" TEXT NOT NULL,
    "sim" TEXT,

    CONSTRAINT "AlarmData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeartbeatData" (
    "id" SERIAL NOT NULL,
    "calibrationValue" INTEGER NOT NULL,
    "mainOrderReply" INTEGER NOT NULL,
    "slaveOrderReply" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mainCommand" TEXT NOT NULL,
    "packetLength" INTEGER NOT NULL,
    "pseudoIP" TEXT NOT NULL,
    "rawData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "sim" TEXT NOT NULL,

    CONSTRAINT "HeartbeatData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackerStatus" (
    "id" SERIAL NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mainCommand" TEXT,
    "packetLength" INTEGER,
    "pseudoIP" TEXT,
    "rawData" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "sim" TEXT,

    CONSTRAINT "TrackerStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IButtonData" (
    "id" SERIAL NOT NULL,
    "subCommand" INTEGER,
    "message" TEXT,
    "driverName" TEXT,
    "driverId" TEXT,
    "swipeData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mainCommand" TEXT,
    "packetLength" INTEGER,
    "pseudoIP" TEXT,
    "rawData" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "sim" TEXT,

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
