import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:5000';

  CreateCharacter(character: Character) {
    //post the character to db
    return this.http.post<Character>(`${this.url}/api/character`, character, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    })
  }
}