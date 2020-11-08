import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaBoardService {

  baseUrl: 'http://localhost:3000/';
  private canvasBg$: BehaviorSubject<string> = new BehaviorSubject('');

  getCanvasBg(): Observable<string> {
    return this.canvasBg$.asObservable();
  }

  setCanvasBg(imageUrl: string): void {
    this.canvasBg$.next(imageUrl);
  }

  constructor(private http: HttpClient) { }

  searchForImages(val: string){
    return this.http.get(`http://localhost:3000/unsplash/find?search=${val}`);
  }
}
