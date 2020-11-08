import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { UnsplashController } from './unsplash.controller';
import { UnsplashService } from './unsplash.service';

@Module({
  imports:[ConfigModule.forRoot(),HttpModule],
  controllers: [UnsplashController],
  providers: [UnsplashService]
})
export class UnsplashModule {}
