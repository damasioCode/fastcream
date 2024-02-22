import { IsNumber, IsString } from 'class-validator';

export class CreateIceCreamDto {
  @IsString()
  flavor: string;

  @IsNumber()
  price: number;
}
