import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../../interfaces/character';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  //user!: User | null;

  ngOnInit(): void {
    //get all the traits available and put them in a list
    // check user-list for example
    //get user from session storage
    //this.user = this.RetrievefromSession()
  }

  //RetrievefromSession(): User | null {
  //  const user = sessionStorage.getItem('user');
  //  if (user === null) {
  //    console.log('Error Occurred')
  //    return null;
  //  } else {
  //    let OUser: User = JSON.parse(user);
  //    return OUser;
  //  }
  //}

     //create a character to hold the information the user picks
  character: Character = {
    characterId: 0,
    name: "",
    level: null,
    wins: null,
    losses: null,
    ties: null,
    baseform: "",
    //userId: this.user?.userId
    //traitId: number,
    //weaponId: number
};
    //save the character to local storage 

  onSubmitBaseForm(baseform: NgForm) {
    //add base form to the character being created
 
    //add character name to the character being created
    this.character.name = baseform.value.charactername;
  }

}
