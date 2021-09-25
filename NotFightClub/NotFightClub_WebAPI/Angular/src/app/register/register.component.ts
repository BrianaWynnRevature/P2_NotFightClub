import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  isFormInValid = false;
  //isAgeInvalid = true;

  ngOnInit(): void {
  }

  //this method can be removed possibly or used to hash passwords
  onSubmit(registerForm: NgForm) {


   
    //if (!registerForm.valid) {
    ////  this.isFormInValid = true;
    ////  this.areCredentialsInvalid = false;
    ////  return;
    //}

    //this.checkCredentials(signInForm);

    //this.notOldEnough(registerForm);

  }

  //notOldEnough(registerForm: NgForm): boolean {
  //  console.log("i'm here!")
  //  const date = registerForm.value.DOB;
  //  console.log(date);
  //  return true;
  //}

  
}
