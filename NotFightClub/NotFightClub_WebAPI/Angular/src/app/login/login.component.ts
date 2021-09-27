import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  isFormInValid = false;
  areCredentialsInvalid = false;

  ngOnInit(): void {
  }

  //this method can be removed since it is not used for validation anymore. But wait until final days in case it becomes
  //useful for something else
  //can use it for hashing passwords

  onSubmit(signInForm: NgForm) {
    
    //if (!signInForm.valid) {
    //  this.isFormInValid = true;
    //  this.areCredentialsInvalid = false;
    //  return;
    //}

    //grab a single user from the database
    //check the password entered on the form with the returned password from the database using bcrypt
    //if the password matches, change isauthenticated to true and redirect to home
      //save user to session storage
    //if the password doesn't match display to screen that credentials are invalid



    const signInData: SignInData = new SignInData(signInForm.value.email, signInForm.value.password);
    //this.authenticationService.authenticate(signInData);

    //make a call to the authentication service to get a user from the database
   
    let OUser = this.authenticationService.Login(signInData); //pass data to authentication service
    console.log(`login component: ${OUser}`);
    //save that user to session storage
    
  }



 
}
