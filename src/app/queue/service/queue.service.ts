import { Injectable, Logger } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'

@Injectable()
export class QueueService {
  private readonly logger = new Logger(QueueService.name)

  constructor(@InjectQueue('gps-data') private readonly gpsDataQueue: Queue) {}

  async addGpsData(
    data: {
      parsedData: {
        checksum: number
        packetType: number
        mainCommand: string
        packetLength: number
        pseudoIP: string
        sim: string
        payload: string
        rawData: string
        timestamp?: Date
        latitude?: number
        longitude?: number
        speed?: number
        angle?: number
        gpsStatus?: {
          located: boolean
          differential: boolean
          satellites: number
        }
        digitalInputs?: {
          systemUse: boolean
          input1: boolean
          antennaShort: boolean
          antennaOpen: boolean
          input2: boolean
          input3: boolean
          input4: boolean
        }
        ignition?: boolean
        oilResistance?: number
        voltage?: number
        mileage?: number
        temperature?: number
        alarms?: {
          oilChange: boolean
          crossBorder: boolean
          overVoltage: boolean
          underVoltage: boolean
          overload: boolean
          overtimeDriving: boolean
          enterBorder: boolean
          illegalDoorOpen: boolean
          illegalStart: boolean
          vibration: boolean
          centerEnabledAlarm: boolean
          powerFailure: boolean
          parking: boolean
          overSpeed: boolean
          emergency: boolean
        }
        extended?: any
        message?: string
        calibrationValue?: number
        mainOrderReply?: number
        slaveOrderReply?: number
        status?: any
        subCommand?: number
        driver?: {
          name: string
          iButtonId: string
        }
        swipeData?: {
          status: number
          dateTime: Date
          latitude: number
          longitude: number
          located: boolean
          driver?: {
            name: string
            iButtonId: string
          }
        }
      }
    },
    jobName: string = 'gps',
  ) {
    try {
      this.logger.log(`Agregando datos a la cola: ${data.parsedData.rawData}`)

      const job = await this.gpsDataQueue.add(jobName, data, {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      })

      this.logger.log(`Trabajo agregado exitosamente con ID: ${job.id}`)
      return job
    } catch (error) {
      this.logger.error(`Error agregando datos a la cola: ${error.message}`, error.stack)
      throw error
    }
  }
}
