import { IsString, IsNumber, IsDate } from 'class-validator';

export class BaseGpsDto {
  @IsNumber()
  mainCommand: number;

  @IsNumber()
  packetLength: number;

  @IsString()
  pseudoIP: string;

  @IsString()
  rawData: string;

  @IsDate()
  timestamp: Date;

  constructor() {
    this.mainCommand = 0;
    this.packetLength = 0;
    this.pseudoIP = '';
    this.rawData = '';
    this.timestamp = new Date();
  }
} 