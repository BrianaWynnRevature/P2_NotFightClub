import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  //this method can be removed possibly or used to hash passwords
  onSubmit(registerForm: NgForm) {
    //const bcrypt = require("bcryptjs");
    //bcrypt.genSalt().then((salt: string)=> {
    //  console.log(salt);
    //})

   


  }



  
}
