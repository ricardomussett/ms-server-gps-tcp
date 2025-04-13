import { IsNumber, IsString } from 'class-validator';
import { BaseGpsDto } from './base-gps.dto';

export class HeartbeatDataDto extends BaseGpsDto {
  @IsNumber()
  calibrationValue: number;

  @IsString()
  mainOrderReply: string;

  @IsString()
  slaveOrderReply: string;
} 