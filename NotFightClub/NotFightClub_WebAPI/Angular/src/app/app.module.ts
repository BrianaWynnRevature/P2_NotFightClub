import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 58d5d42eeeec1eca23454f28b4361f585a52ccf5
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


>>>>>>> Stashed changes
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 58d5d42eeeec1eca23454f28b4361f585a52ccf5

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< Updated upstream
    UserProfileComponent
=======
    StoreComponent,
    UserProfileComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    EditProfileComponent,

>>>>>>> Stashed changes
=======
    UserProfileComponent,
    ChatComponent
>>>>>>> 58d5d42eeeec1eca23454f28b4361f585a52ccf5
  ],
  imports: [
    HttpClientModule,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
