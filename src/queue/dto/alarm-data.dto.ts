import { IsObject, IsBoolean } from 'class-validator';
import { BaseGpsDto } from './base-gps.dto';

export class AlarmDataDto extends BaseGpsDto {
  @IsObject()
  alarms: {
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
  } = {};

  @IsBoolean()
  oilChange: boolean = false;

  @IsBoolean()
  crossBorder: boolean = false;

  @IsBoolean()
  overVoltage: boolean = false;

  @IsBoolean()
  underVoltage: boolean = false;

  @IsBoolean()
  overload: boolean = false;

  @IsBoolean()
  overtimeDriving: boolean = false;

  @IsBoolean()
  enterBorder: boolean = false;

  @IsBoolean()
  illegalDoorOpen: boolean = false;

  @IsBoolean()
  illegalStart: boolean = false;

  @IsBoolean()
  vibration: boolean = false;

  @IsBoolean()
  centerEnabledAlarm: boolean = false;

  @IsBoolean()
  powerFailure: boolean = false;

  @IsBoolean()
  parking: boolean = false;

  @IsBoolean()
  overSpeed: boolean = false;

  @IsBoolean()
  emergency: boolean = false;
} 