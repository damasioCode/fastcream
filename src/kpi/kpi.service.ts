import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderStatus } from 'src/order/enums/order-status.enum';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KpiService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getTotalOrders() {
    return this.orderRepository.count();
  }

  getTotalUsers() {
    return this.userRepository.count({
      where: {
        access_level: 'user',
      },
    });
  }

  getTotalMonthlyIncome() {
    return this.orderItemRepository.find({
      where: {
        order: {
          status: OrderStatus.DELIVERED,
        },
      },
      relations: ['ice_cream', 'order'],
    });
  }
}
