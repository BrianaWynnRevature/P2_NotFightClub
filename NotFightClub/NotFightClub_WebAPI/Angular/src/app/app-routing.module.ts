import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatComponent } from './chat/chat.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StoreComponent } from './store/store.component';
import { UserListComponent } from './user/user-list/user-list.component';





const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test1', component: TestComponent, canActivate:[AuthGuard]},
  { path: 'chat', component: ChatComponent },
  { path: 'store', component: StoreComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'user-list', component: UserListComponent}

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
