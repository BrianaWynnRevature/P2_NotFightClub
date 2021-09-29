import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '!FightClub';

  constructor(public authenticationService: AuthenticationService) {

  }
  hideCarasol = true;

  logout() {
    this.authenticationService.logout();

  }

  //tried to use just a variable for this part, but it would not register the change in authentication status
  authenticate():boolean {
    let authenticated = this.authenticationService.isAuthenticated;
    //console.log(`final auth: ${authenticated}`);
    return authenticated;
  }

  HideCarasol(): boolean {
    return this.hideCarasol = true;
  }
   

}
