import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaCardsService } from './loteria-cards.service';

describe('LoteriaCardsService', () => {
  let service: LoteriaCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoteriaCardsService],
    }).compile();

    service = module.get<LoteriaCardsService>(LoteriaCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
