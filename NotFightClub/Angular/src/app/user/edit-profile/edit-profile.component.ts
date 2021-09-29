import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
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

 
  constructor(private router: Router, private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      userId: [''],
      userName: [''],
      email: [''],
      dob : ['']
    })
      

     let userFromSession = sessionStorage.getItem('user');
    if (!userFromSession) {
      return
    } else {
      let id = JSON.parse(userFromSession).userId;
      let username = JSON.parse(userFromSession).userName;
      let email = JSON.parse(userFromSession).email;
      let dob = JSON.parse(userFromSession).dob;

      this.formValue.controls['userId'].setValue(id);
      this.formValue.controls['userName'].setValue(username);
      this.formValue.controls['email'].setValue(email);
      this.formValue.controls['dob'].setValue(dob);
      // debugger
      console.log(this.formValue.value)
    }
  }

  updateCurrentUser() {
    console.log(this.formValue.value);
    this.userService.editProfile(this.formValue.value).subscribe(a => {
        console.log(`${a}`)
      });

      // this.userService.getUserById(id).pipe(
      //   map((user: User) => {
      //     this.formValue.patchValue({
      //       userName: user.userName,
      //       email: user.email,
      //       dob: user.dob
      //     })
      //   })
      // )
    

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
      if (confirm("Are you sure you want to delete your profile?\nAll information associated to this user profile will be permanently deleted.")) {
        this.userService.deleteUser(id1).subscribe(
          id => {
            this.router.navigate(['login']);
          });
      }
    }
  }

}
