import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
<<<<<<< HEAD
<<<<<<< Updated upstream

const routes: Routes = [
  {
    path: 'my-profile',
    component: UserProfileComponent
  }
=======
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
=======
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
>>>>>>> 58d5d42eeeec1eca23454f28b4361f585a52ccf5
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test1', component: TestComponent, canActivate:[AuthGuard]},
  { path: 'chat', component: ChatComponent },
<<<<<<< HEAD
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent}
>>>>>>> Stashed changes
=======
  { path: 'my-profile', component: UserProfileComponent}
>>>>>>> 58d5d42eeeec1eca23454f28b4361f585a52ccf5
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
