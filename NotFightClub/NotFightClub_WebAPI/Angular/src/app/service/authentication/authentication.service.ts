import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate([''])
      console.log(this.isAuthenticated);
      console.log('userAuthenticated');
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }


  private checkCredentials(signInData: SignInData): boolean {
    //should call to a webservice that authenticates the user info
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }

  //these methods would not be needed if third-party authentication is used
  private checkEmail(email: string) {
    //grab user from the data base with this email
    //if there return true
    //if null give message 'no user registered with email entered'
    if (email === this.mockedUser.getEmail()) {
      console.log('email authenticated');
      return true;
    }
    console.log('email not authenticated');
    return false;
  }

  private checkPassword(password: string) {
    //only check password if email is found
    //retrieve the password for the provided email
    //if entered password === password from db return true
    if (password === this.mockedUser.getPassword()) {
      console.log('password authenticated');
      return true;
    }
    console.log('password not authenticated');
    return false;
  }

  logout() {
    //you would also clear out the session storage here if we decide to store things
    this.isAuthenticated = false;
    //return them to the home page
    this.router.navigate(['']);
    console.log('User signed out')
  }
  

}
