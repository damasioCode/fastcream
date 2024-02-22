import { PartialType } from '@nestjs/mapped-types';
import { CreateIceCreamDto } from './create-ice-cream.dto';

export class UpdateIceCreamDto extends PartialType(CreateIceCreamDto) {}
