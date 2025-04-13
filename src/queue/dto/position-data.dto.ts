import { IsNumber, IsObject, IsBoolean } from 'class-validator';
import { BaseGpsDto } from './base-gps.dto';

export class PositionDataDto extends BaseGpsDto {
  @IsNumber()
  latitude: number = 0;

  @IsNumber()
  longitude: number = 0;

  @IsNumber()
  speed: number = 0;

  @IsNumber()
  angle: number = 0;

  @IsObject()
  gpsStatus: {
    located: boolean;
    differential: boolean;
    satellites: number;
  } = {
    located: false,
    differential: false,
    satellites: 0
  };

  @IsObject()
  digitalInputs: {
    systemUse: boolean;
    input1: boolean;
    antennaShort: boolean;
    antennaOpen: boolean;
    input2: boolean;
    input3: boolean;
    input4: boolean;
  } = {
    systemUse: false,
    input1: false,
    antennaShort: false,
    antennaOpen: false,
    input2: false,
    input3: false,
    input4: false
  };

  @IsBoolean()
  ignition: boolean = false;

  @IsNumber()
  oilResistance: number = 0;

  @IsNumber()
  voltage: number = 0;

  @IsNumber()
  mileage: number = 0;

  @IsNumber()
  temperature: number = 0;
} 