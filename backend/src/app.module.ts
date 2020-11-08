import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnsplashModule } from './unsplash/unsplash.module';
import { LoteriaCardsModule } from './loteria-cards/loteria-cards.module';

@Module({
  imports: [ConfigModule.forRoot(), UnsplashModule, LoteriaCardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
