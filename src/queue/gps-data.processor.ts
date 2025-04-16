import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PrismaService } from '../prisma/prisma.service';
import { Logger } from '@nestjs/common';
import { COMMAND_CODES } from './enums/code.enums';
import { PositionData, AlarmData, HeartbeatData, TrackerStatusData, IButtonData } from './interface/queue.interface';


@Processor('gps-data')
export class GpsDataProcessor {
  private readonly logger = new Logger(GpsDataProcessor.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Procesa y almacena los datos de posición GPS recibidos del dispositivo
   * @param parsedData Datos de posición GPS parseados del dispositivo
   * @returns Promise<void>
   * @description Esta función toma los datos de posición GPS parseados y los almacena en la base de datos.
   * Los datos incluyen información como coordenadas, velocidad, estado del GPS, entradas digitales y otros
   * parámetros del dispositivo.
   */
  private async processPositionData(parsedData: PositionData): Promise<void> {
    await this.prisma.positionData.create({
      data: {
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
  }


  /**
   * Procesa y almacena los datos de alarmas recibidos del dispositivo
   * @param parsedData Datos de alarmas parseados del dispositivo
   * @returns Promise<void>
   * @description Esta función toma los datos de alarmas parseados y los almacena en la base de datos.
   * Los datos incluyen información sobre diferentes tipos de alarmas como:
   * - Cambio de aceite
   * - Cruce de fronteras
   * - Voltaje (alto/bajo)
   * - Sobrecarga
   * - Conducción prolongada
   * - Apertura ilegal de puertas
   * - Arranque ilegal
   * - Vibración
   * - Fallo de energía
   * - Estacionamiento
   * - Exceso de velocidad
   * - Emergencia
   */
  private async processAlarmData(parsedData: AlarmData): Promise<void> {
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
  }


  /**
   * Procesa y almacena los datos de heartbeat recibidos del dispositivo
   * @param parsedData Datos del heartbeat parseados del dispositivo
   * @returns Promise<void>
   * @description Esta función toma los datos del heartbeat y los almacena en la base de datos.
   * Los datos incluyen información como:
   * - Comando principal
   * - Longitud del paquete
   * - IP del dispositivo
   * - Datos sin procesar
   * - Valor de calibración
   * - Respuesta de orden principal
   * - Respuesta de orden secundaria
   * - Marca de tiempo
   */
  private async processHeartbeatData(parsedData: HeartbeatData): Promise<void> {
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
  }

  /**
   * Procesa y almacena los datos de estado del rastreador
   * @param parsedData Datos del estado del rastreador parseados del dispositivo
   * @returns Promise<void>
   * @description Esta función toma los datos del estado del rastreador y los almacena en la base de datos.
   * Los datos incluyen información como:
   * - Comando principal
   * - Longitud del paquete
   * - IP del dispositivo
   * - Datos sin procesar
   * - Tiempo de muestreo
   * - Estado de alarmas
   * - Estado de ubicación
   * - Configuración de muestreo
   * - Configuración de envío
   * - Configuración de parada
   * - Configuración de velocidad
   * - Límites de teléfono y área
   * - Configuración de seguridad
   * - Tiempo de conducción
   * - Configuración de alarmas
   * - Configuración de fotografía
   */
  private async processTrackerStatus(parsedData: TrackerStatusData): Promise<void> {
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
  }


  /**
   * Procesa y almacena los datos del iButton
   * @param parsedData Datos del iButton parseados del dispositivo
   * @returns Promise<void>
   * @description Esta función toma los datos del iButton y los almacena en la base de datos.
   * Los datos incluyen información como:
   * - Comando principal y subcomando
   * - Longitud del paquete
   * - IP del dispositivo
   * - Datos sin procesar
   * - Mensaje
   * - Información del conductor (nombre e ID)
   * - Datos de deslizamiento del iButton
   * - Marca de tiempo
   */
  private async processIButtonData(parsedData: IButtonData): Promise<void> {
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
  }

  /**
   * Procesa los datos GPS recibidos a través de una cola de trabajo
   * @param job Trabajo que contiene los datos GPS a procesar
   * @returns Promise<void>
   * @description Esta función es el punto de entrada para procesar los datos GPS recibidos.
   * Maneja diferentes tipos de datos según el comando principal recibido:
   * - Datos de posición (POSITION_DATA)
   * - Datos de alarmas (ALARM_DATA) 
   * - Datos de heartbeat (HEARTBEAT)
   * - Estado del rastreador (TRACKER_STATUS)
   * - Datos del iButton (IBUTTON_DATA)
   * 
   * El procesamiento se realiza de forma dinámica utilizando un mapa de procesadores
   * que asocia cada tipo de comando con su función de procesamiento específica.
   */
  @Process('gps')
  async handleGpsData(job: Job) {
    try {
      // Registra los datos recibidos para debugging
      console.log(job.data);
      
      // Extrae los datos parseados del trabajo
      const { parsedData } = job.data;

      // Mapa de procesadores por tipo de comando
      const commandProcessors = {
        [COMMAND_CODES.POSITION_DATA]: this.processPositionData.bind(this),
        [COMMAND_CODES.ALARM_DATA]: this.processAlarmData.bind(this),
        [COMMAND_CODES.HEARTBEAT]: this.processHeartbeatData.bind(this),
        [COMMAND_CODES.TRACKER_STATUS]: this.processTrackerStatus.bind(this),
        [COMMAND_CODES.IBUTTON_DATA]: this.processIButtonData.bind(this)
      };

      // Obtiene el procesador correspondiente al comando recibido
      const processor = commandProcessors[parsedData.mainCommand];
      
      if (processor) {
        // Procesa los datos usando el procesador correspondiente
        await processor(parsedData);
        this.logger.log(`Datos GPS procesados y guardados correctamente. ID: ${parsedData.gpsDataId}`);
      } else {
        // Registra advertencia si no hay procesador para el comando
        this.logger.warn(`No se encontró procesador para el comando: ${parsedData.mainCommand}`);
      }
    } catch (error) {
      // Registra y relanza cualquier error ocurrido durante el procesamiento
      this.logger.error('Error al procesar datos GPS:', error);
      throw error;
    }
  }
}