import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaCardsController } from './loteria-cards.controller';

describe('LoteriaCardsController', () => {
  let controller: LoteriaCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoteriaCardsController],
    }).compile();

    controller = module.get<LoteriaCardsController>(LoteriaCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
