import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Trait } from '../../interfaces/trait';

@Injectable({
  providedIn: 'root'
})
export class TraitService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:5000';
  //create functions for http requests
  TraitList(): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.url}/api/trait`)
  }

  getTraitById(id: number): Observable<Trait> {
    return this.http.get<Trait>(`${this.url}/Trait/` + id).pipe(map((trait: Trait) => trait))
  }
}
