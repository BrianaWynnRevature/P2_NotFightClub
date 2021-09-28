using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.Models;
using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotFightClub_Logic.Mappers
{
    public class CharacterMapper : IMapper<Character, ViewCharacter>
    {
        public ViewCharacter ModelToViewModel(Character character)
        {
            ViewCharacter viewCharacter = new ViewCharacter();
            viewCharacter.Baseform = character.Baseform;
            viewCharacter.Level = character.Level;
            viewCharacter.Name = character.Name;
            viewCharacter.Ties = character.Ties;
            viewCharacter.TraitId = character.TraitId;
            viewCharacter.WeaponId = character.WeaponId;
            viewCharacter.Losses = character.Losses;
            viewCharacter.UserId = character.UserId;
            viewCharacter.Wins = character.Wins;
            viewCharacter.CharacterId = character.CharacterId;
            

            return viewCharacter;
        }

        public Character ViewModelToModel(ViewCharacter viewCharacter)
        {
            Character character = new Character();
            character.Baseform = viewCharacter.Baseform;
            character.Level = viewCharacter.Level;
            character.Name = viewCharacter.Name;
            character.Ties = viewCharacter.Ties;
            character.TraitId = viewCharacter.TraitId;
            character.WeaponId = viewCharacter.WeaponId;
            character.Losses = viewCharacter.Losses;
            character.UserId = viewCharacter.UserId;
            character.Wins = viewCharacter.Wins;
            character.CharacterId = viewCharacter.CharacterId;

            return character;
        }
    }
}
