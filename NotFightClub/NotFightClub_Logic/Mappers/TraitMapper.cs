using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.Models;
using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotFightClub_Logic.Mappers
{
    public class TraitMapper : IMapper<Trait, ViewTrait>
    {
        public ViewTrait ModelToViewModel(Trait trait)
        {
            ViewTrait viewTrait = new ViewTrait();
            viewTrait.TraitId = trait.TraitId;
            viewTrait.Description = trait.Description;

            return viewTrait;
        }

        public Trait ViewModelToModel(ViewTrait viewTrait)
        {
            Trait trait = new Trait();
            trait.Description = viewTrait.Description;

            return trait;
        }
    }
}
