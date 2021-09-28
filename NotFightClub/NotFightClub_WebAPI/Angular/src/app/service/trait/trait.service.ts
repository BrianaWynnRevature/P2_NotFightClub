import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trait } from '../../interfaces/trait';

@Injectable({
  providedIn: 'root'
})
export class TraitService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:5000';

  TraitList(): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.url}/api/user`)
  }


}
