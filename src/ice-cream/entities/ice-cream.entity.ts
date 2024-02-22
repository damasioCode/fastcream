import { OrderItem } from 'src/order-item/entities/order-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class IceCream {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  flavor: string;

  @Column()
  price: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.ice_cream)
  order_items: OrderItem[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
