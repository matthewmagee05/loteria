import { Controller, Get, Post, Query } from '@nestjs/common';
import { UnsplashService } from './unsplash.service';

@Controller('unsplash')
export class UnsplashController {
    constructor(private unsplashService: UnsplashService){}

    @Get('find')
    getImageBySearch(@Query() query) {
    return this.unsplashService.getImageBySearch(query.search, query.page);
        
  }
}
