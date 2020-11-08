import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaBoardService {

  baseUrl: 'http://localhost:3000/';
  private canvasBg$: BehaviorSubject<string> = new BehaviorSubject('');
  private uploadImage$: BehaviorSubject<ArrayBuffer> = new BehaviorSubject(null);

  getCanvasBg(): Observable<string> {
    return this.canvasBg$.asObservable();
  }

  setCanvasBg(imageUrl: string): void {
    this.canvasBg$.next(imageUrl);
  }

  getUploadImage(): Observable<ArrayBuffer>{
    return this.uploadImage$.asObservable();
  }

  setUploadImage(data: ArrayBuffer) {
    this.uploadImage$.next(data);
  }

  constructor(private http: HttpClient) { }

  searchForImages(val: string, page: number){
    return this.http.get(`http://localhost:3000/unsplash/find?search=${val}&page=${page}`);
  }
}
