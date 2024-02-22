import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
  ) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    const objectCreated = this.orderItemRepository.create(createOrderItemDto);
    return this.orderItemRepository.save(objectCreated);
  }

  findAll() {
    const findObjects = this.orderItemRepository.find({
      order: { created_at: 'DESC' },
      relations: ['ice_cream'],
    });
    return findObjects;
  }

  findOne(id: string) {
    const findObject = this.orderItemRepository.findOneBy({ id });
    return findObject;
  }

  update(id: string, updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemRepository.update(id, updateOrderItemDto);
  }

  remove(id: string) {
    return this.orderItemRepository.delete(id);
  }
}
