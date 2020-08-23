import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from '../interfaces/cats';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  // url: string = 'https://www.google.es/';
  url: string = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) {

  }
  getCatImg() {
    return this.http.get<Cats>(this.url);
  }

}
