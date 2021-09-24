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
  
    this.checkCredentials(signInForm);
    
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData: SignInData = new SignInData(signInForm.value.email, signInForm.value.password);
    
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormInValid = false;
      this.areCredentialsInvalid = true;
    }
    console.log(signInForm.value)
  }

 
}
