import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fight } from '../../interfaces/fight';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FightService {



  constructor(private http: HttpClient) { }

  private url = 'http://localhost:5000/fight';
  getCurrentFight(fightId: number): Observable<Fight> {
    console.log(fightId);
    return this.http.get<Fight>(`${this.url}/${fightId}`).pipe(map((fight:Fight) => fight));
  }
}
