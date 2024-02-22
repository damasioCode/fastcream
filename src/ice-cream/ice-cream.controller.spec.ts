import { Test, TestingModule } from '@nestjs/testing';
import { IceCreamController } from './ice-cream.controller';
import { IceCreamService } from './ice-cream.service';

describe('IceCreamController', () => {
  let controller: IceCreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IceCreamController],
      providers: [IceCreamService],
    }).compile();

    controller = module.get<IceCreamController>(IceCreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
