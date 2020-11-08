import { Controller, Get, Query } from '@nestjs/common';
import { LoteriaCardsService } from './loteria-cards.service';

@Controller('loteria-cards')
export class LoteriaCardsController {

    constructor(private loteriaCardService: LoteriaCardsService){}

    @Get('find')
    getCardBySearch(@Query() query) {
    return this.loteriaCardService.getCardBySearch(query.search);
        
  }
}
