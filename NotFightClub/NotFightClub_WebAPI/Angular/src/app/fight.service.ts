import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  constructor(private http: HttpClient) { }

  getFight() {
    this.http.get('http://localhost:5000/api/')
  }
}
