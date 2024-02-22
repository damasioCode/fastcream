import { Test, TestingModule } from '@nestjs/testing';
import { ToppingController } from './topping.controller';
import { ToppingService } from './topping.service';

describe('ToppingController', () => {
  let controller: ToppingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToppingController],
      providers: [ToppingService],
    }).compile();

    controller = module.get<ToppingController>(ToppingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
