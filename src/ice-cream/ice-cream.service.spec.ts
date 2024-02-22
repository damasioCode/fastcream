import { Test, TestingModule } from '@nestjs/testing';
import { IceCreamService } from './ice-cream.service';

describe('IceCreamService', () => {
  let service: IceCreamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IceCreamService],
    }).compile();

    service = module.get<IceCreamService>(IceCreamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
