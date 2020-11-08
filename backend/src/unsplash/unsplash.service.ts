import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import {map} from 'rxjs/operators';

@Injectable()
export class UnsplashService {

    baseUrl: string = 'https://api.unsplash.com/';

    headersRequest = {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${this.configService.get('UNSPLASH_ACCESS_KEY')}`,
    };
    

    constructor(private configService: ConfigService, private httpService: HttpService){}

    getImageBySearch(searchVal: string, page: string) {
        return this.httpService.get(`${this.baseUrl}/search/photos?page=${page}&query=${searchVal}`, {headers: this.headersRequest}).pipe(map(response => response.data))
    }
}
