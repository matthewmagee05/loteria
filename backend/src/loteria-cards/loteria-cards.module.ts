import { Module } from '@nestjs/common';
import { LoteriaCardsController } from './loteria-cards.controller';
import { LoteriaCardsService } from './loteria-cards.service';

@Module({
  controllers: [LoteriaCardsController],
  providers: [LoteriaCardsService]
})
export class LoteriaCardsModule {}
