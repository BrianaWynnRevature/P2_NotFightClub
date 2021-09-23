import { Injectable } from '@angular/core';
import { SignInData } from '../../model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //you would call an authentication service here in this class. I need to research which one to use and add
  //in the appropriate information

  //mockUser data to test if the functions work
  private readonly mockedUser = new SignInData('bnwynn16@gmail.com', 'test123')
  isAuthenticated = false;

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }


  private checkCredentials(signInData: SignInData): boolean {
    //should call to a webservice that authenticates the user info
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }

  //these methods would not be need if third-party authentication is used
  private checkEmail(email: string) {
    if (email === this.mockedUser.getEmail()) {
      return true;
    }
    return false;
  }

  private checkPassword(password: string) {
    if (password === this.mockedUser.getPassword()) {
      return true;
    }
    return false;
  }
  
  constructor() { }
}
