import { Injectable } from '@nestjs/common';
import * as LOTERIA_CARDS from './cards.json'

@Injectable()
export class LoteriaCardsService {
    getCardBySearch(search: any) {
        return LOTERIA_CARDS.cards.filter(card => card.name.includes(search))
    }
}
