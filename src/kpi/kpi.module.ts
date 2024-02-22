import { Module } from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiController } from './kpi.controller';
import { Order } from 'src/order/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

@Module({
  controllers: [KpiController],
  imports: [TypeOrmModule.forFeature([Order, User, OrderItem])],
  providers: [KpiService],
})
export class KpiModule {}
