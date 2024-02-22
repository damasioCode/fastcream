import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateIceCreamDto } from './dto/create-ice-cream.dto';
import { UpdateIceCreamDto } from './dto/update-ice-cream.dto';
import { IceCream } from './entities/ice-cream.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IceCreamService {
  constructor(
    @InjectRepository(IceCream)
    private readonly iceCreamRepository: Repository<IceCream>,
  ) {}

  create(createIceCreamDto: CreateIceCreamDto) {
    const objectCreated = this.iceCreamRepository.create(createIceCreamDto);
    return this.iceCreamRepository.save(objectCreated);
  }

  findAll() {
    const findObjects = this.iceCreamRepository.find({
      order: { created_at: 'DESC' },
    });
    return findObjects;
  }

  findOne(id: string) {
    const findObject = this.iceCreamRepository.findOneBy({ id });
    return findObject;
  }

  update(id: string, updateIceCreamDto: UpdateIceCreamDto) {
    return this.iceCreamRepository.update(id, updateIceCreamDto);
  }

  remove(id: string) {
    return this.iceCreamRepository.delete(id);
  }
}
