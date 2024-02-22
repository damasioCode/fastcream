import { Test, TestingModule } from '@nestjs/testing';
import { ToppingService } from './topping.service';

describe('ToppingService', () => {
  let service: ToppingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToppingService],
    }).compile();

    service = module.get<ToppingService>(ToppingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
