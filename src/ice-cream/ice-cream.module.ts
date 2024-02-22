import { Module } from '@nestjs/common';
import { IceCreamService } from './ice-cream.service';
import { IceCreamController } from './ice-cream.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IceCream } from './entities/ice-cream.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IceCream])],
  controllers: [IceCreamController],
  providers: [IceCreamService],
})
export class IceCreamModule {}
