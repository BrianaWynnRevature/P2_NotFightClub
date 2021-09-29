import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User | null = null;
  formValue !: FormGroup;

 
  constructor(private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      userName: [''],
      email: [''],
      dob : ['']
    })
     let userFromSession = sessionStorage.getItem('user');
    if (!userFromSession) {
      return
    } else {
      let username = JSON.parse(userFromSession).userName;
      let email = JSON.parse(userFromSession).email;
      let dob = JSON.parse(userFromSession).dob;

      this.formValue.controls['userName'].setValue(username);
      this.formValue.controls['email'].setValue(email);
      this.formValue.controls['dob'].setValue(dob);
      }
  }


  

  deleteUser() {
    let id = sessionStorage.getItem('user');
    console.log(id);
    // const id1 = JSON.parse(id).userId;
    // console.log(id1);
    // debugger
    if (!id) {
      return
    } else {
      let id1 = JSON.parse(id).userId
      console.log(id1)
      this.userService.deleteUser(id1);
    }
  }

}
