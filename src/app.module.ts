import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { UserModule } from './user/user.module';
import { IceCreamModule } from './ice-cream/ice-cream.module';
import { ToppingModule } from './topping/topping.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { KpiModule } from './kpi/kpi.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    IceCreamModule,
    OrderModule,
    OrderItemModule,
    UserModule,
    ToppingModule,
    AuthModule,
    KpiModule,
  ],
})
export class AppModule {}
