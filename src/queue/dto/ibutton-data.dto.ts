import { IsNumber, IsString, IsObject } from 'class-validator';
import { BaseGpsDto } from './base-gps.dto';

export class IButtonDataDto extends BaseGpsDto {
  @IsNumber()
  subCommand: number;

  @IsString()
  message: string;

  @IsString()
  driverName: string;

  @IsString()
  driverId: string;

  @IsObject()
  swipeData: object;
} 