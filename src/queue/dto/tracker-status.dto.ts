import { IsNumber, IsString, IsBoolean } from 'class-validator';
import { BaseGpsDto } from './base-gps.dto';

export class TrackerStatusDto extends BaseGpsDto {
  @IsNumber()
  samplingTime: number;

  @IsString()
  alarmStatus: string;

  @IsBoolean()
  located: boolean;

  @IsString()
  samplingType: string;

  @IsNumber()
  samplingValue: number;

  @IsString()
  sendingType: string;

  @IsNumber()
  carStopSetting: number;

  @IsNumber()
  overspeedSetting: number;

  @IsNumber()
  phoneLimit: number;

  @IsNumber()
  areaNodeLimit: number;

  @IsString()
  safeSetting: string;

  @IsNumber()
  longTimeDriving: number;

  @IsNumber()
  samplingValueAccOff: number;

  @IsBoolean()
  emergencyAlarmSwitch: boolean;

  @IsString()
  photographRelated: string;
} 