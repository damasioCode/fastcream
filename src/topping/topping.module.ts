import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';

@Module({
  controllers: [ToppingController],
  providers: [ToppingService],
})
export class ToppingModule {}
