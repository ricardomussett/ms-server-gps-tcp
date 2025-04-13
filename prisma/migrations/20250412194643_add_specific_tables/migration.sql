-- CreateTable
CREATE TABLE "PositionData" (
    "id" SERIAL NOT NULL,
    "gpsDataId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "speed" DOUBLE PRECISION,
    "angle" DOUBLE PRECISION,
    "gpsStatus" TEXT,
    "digitalInputs" TEXT,
    "ignition" BOOLEAN,
    "oilResistance" INTEGER,
    "voltage" DOUBLE PRECISION,
    "mileage" INTEGER,
    "temperature" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PositionData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlarmData" (
    "id" SERIAL NOT NULL,
    "gpsDataId" INTEGER NOT NULL,
    "alarms" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlarmData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeartbeatData" (
    "id" SERIAL NOT NULL,
    "gpsDataId" INTEGER NOT NULL,
    "calibrationValue" INTEGER,
    "mainOrderReply" INTEGER,
    "slaveOrderReply" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeartbeatData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackerStatus" (
    "id" SERIAL NOT NULL,
    "gpsDataId" INTEGER NOT NULL,
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

    CONSTRAINT "TrackerStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IButtonData" (
    "id" SERIAL NOT NULL,
    "gpsDataId" INTEGER NOT NULL,
    "subCommand" INTEGER,
    "message" TEXT,
    "driverName" TEXT,
    "driverId" TEXT,
    "swipeData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IButtonData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PositionData_gpsDataId_key" ON "PositionData"("gpsDataId");

-- CreateIndex
CREATE UNIQUE INDEX "AlarmData_gpsDataId_key" ON "AlarmData"("gpsDataId");

-- CreateIndex
CREATE UNIQUE INDEX "HeartbeatData_gpsDataId_key" ON "HeartbeatData"("gpsDataId");

-- CreateIndex
CREATE UNIQUE INDEX "TrackerStatus_gpsDataId_key" ON "TrackerStatus"("gpsDataId");

-- CreateIndex
CREATE UNIQUE INDEX "IButtonData_gpsDataId_key" ON "IButtonData"("gpsDataId");

-- AddForeignKey
ALTER TABLE "PositionData" ADD CONSTRAINT "PositionData_gpsDataId_fkey" FOREIGN KEY ("gpsDataId") REFERENCES "GpsData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlarmData" ADD CONSTRAINT "AlarmData_gpsDataId_fkey" FOREIGN KEY ("gpsDataId") REFERENCES "GpsData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeartbeatData" ADD CONSTRAINT "HeartbeatData_gpsDataId_fkey" FOREIGN KEY ("gpsDataId") REFERENCES "GpsData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackerStatus" ADD CONSTRAINT "TrackerStatus_gpsDataId_fkey" FOREIGN KEY ("gpsDataId") REFERENCES "GpsData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IButtonData" ADD CONSTRAINT "IButtonData_gpsDataId_fkey" FOREIGN KEY ("gpsDataId") REFERENCES "GpsData"("id") ON DELETE CASCADE ON UPDATE CASCADE;
