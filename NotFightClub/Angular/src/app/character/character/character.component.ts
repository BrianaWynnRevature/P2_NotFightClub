import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../../interfaces/character';
import { Trait } from '../../interfaces/trait';
import { User } from '../../interfaces/user';
import { Weapon } from '../../interfaces/weapon';
import { TraitService } from '../../service/trait/trait.service';
import { WeaponService } from '../../service/weapon/weapon.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {


  constructor(private traitService: TraitService, private weaponService: WeaponService) { }

  //user!: User | null;

  traitList: Trait[] = [];
  weapon = "";

  ngOnInit(): void {
    //get all the traits available and put them in a list
    // check user-list for example
    this.traitService.TraitList().subscribe(x => {
      this.traitList = x
      //  //get user from session storage
      //  //this.user = this.RetrievefromSession()
    })

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

    traitId: 0,
    //weaponId: number
  };
  //save the character to local storage 

  onSubmitBaseForm(baseform: NgForm) {
    //add base form to the character being created

    //add character name to the character being created
    this.character.name = baseform.value.charactername;
    //console.log(`list of traits: ${this.traitList}`)
  }

  SubmitTrait(traitId: number) {
    //set the character's trait id
    this.character.traitId = traitId;
  }

  SubmitCharacter() {
    //call to services to post character
  }

  //weapon generation
  //connect weapon service to api to get a random weapon
  //send the weapon to our database
  //display the weapon to the view
  //add the weapon to the character
  //disable the weapon button after it is pressed
  //
  async SubmitWeapon() {
    let oWeapon = await this.weaponService.RandomWeapon();
    oWeapon.subscribe(weapon => {
      //put into a weapon format
      const weaponFull: Weapon = { WeaponId: 0, Description: weapon as string }
      console.log(`weapon sent to storage: ${weaponFull}`)
      //console.log(`This is what 3rd party returns: ${weaponFull.Description} and  this is the id I assigned ${weaponFull.WeaponId}`)
      //save to session storage

      console.log(`what I'm sending to session: ${sessionStorage.setItem('weapon', JSON.stringify(weaponFull))}`);
    })
    //post to our database


    const randomWeapon = await sessionStorage.getItem('weapon')
    if (randomWeapon === null) {
      console.log('Error Occurred')
    } else {
      let OrandomWeapon: Weapon = JSON.parse(randomWeapon);
      console.log(OrandomWeapon)
      let dbWeapon = await this.weaponService.PostWeapon(OrandomWeapon)
      dbWeapon.subscribe(weapon => {
        console.log(`returned from db ${weapon.Description} and ${weapon.WeaponId}`)

       })
   
    }
    //console.log(`in character component: ${oWeapon}`);
 
  }

}
