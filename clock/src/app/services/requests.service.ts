import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from '../interfaces/cats';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  // url: string = 'https://www.google.es/';
  url: string = 'https://api.thecatapi.com/v1/images/search?';
  constructor(private http: HttpClient) {

  }
  getCatImg() {
    return this.http.get<string>(this.url);
  }

}
