import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    const objectCreated = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(objectCreated);
  }

  findAll() {
    const findObjects = this.orderRepository.find({
      order: { created_at: 'DESC' },
      select: {
        user: {
          id: true,
          name: true,
          email: true,
        },
      },
      relations: ['user'],
    });
    return findObjects;
  }

  findOne(id: string) {
    const findObject = this.orderRepository.find({
      where: { id },
      select: {
        user: {
          id: true,
          name: true,
          email: true,
        },
        order_items: {
          quantity: true,
          ice_cream: {
            price: true,
            flavor: true,
          },
        },
      },
      relations: ['user', 'order_items', 'order_items.ice_cream'],
    });
    return findObject;
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: string) {
    return this.orderRepository.delete(id);
  }
}
