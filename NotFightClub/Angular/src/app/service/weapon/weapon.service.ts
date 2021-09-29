import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Weapon } from '../../interfaces/weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private http: HttpClient) { }

  private thirdPartyurl = 'https://random-word-form.herokuapp.com/random/noun';
  private url = 'http://localhost:5000';
  
  RandomWeapon() {
    //get the weapon from api and return to character component
    return this.http.get(this.thirdPartyurl)
    
  }

  PostWeapon(weapon: Weapon): Observable<Weapon>
  {
    return this.http.post<Weapon>(`${this.url}/api/Weapon`, weapon, {
      headers: new HttpHeaders({
            'Content-Type': 'application/json'
      })
 
    })
     .pipe(catchError(this.handleError<Weapon>('adding weapon to db', weapon)));
  }



  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }



  //async RandomWeapon() {

  //  let OWeapon = await this.http.get<string>(`${this.thirdPartyurl}`);
  //  OWeapon.subscribe(async weapon => {
  //    //create a new weapon and  assign to the description and id
  //    console.log(weapon)
  //    const weaponObject: Weapon = { WeaponId: 0, Description: weapon }
    
  //    console.log(weaponObject);
  //    sessionStorage.setItem('weapon', JSON.stringify(weapon));      
  //    console.log('post should happen')
  //    return await this.Post();
  //  }) 
    
   
  //}

  //async Post(){
  //  const weaponString =  await sessionStorage.getItem('weapon');
  //  console.log(`I'm trying to post already ${weaponString}`)
  //  if (weaponString === null) {
  //    console.log('Error saving weapon')
  //    return null
  //  } else {
  //    console.log(`I made it to the posting function`)
  //    let weapon: Weapon = JSON.parse(weaponString);
  //    console.log(`This is the weapon I'm sending: ${weapon}`)
  //    return await this.http.post<Weapon>(`${this.url}/api/Weapon`, weapon, {
        

  //        headers: new HttpHeaders({
  //          'Content-Type': 'application/json'
  //        })
  //    })
      
  //  }

  //}


}
