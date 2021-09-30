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
    public class TraitMapper : IMapper<Trait, ViewTrait>
    {
        public ViewTrait ModelToViewModel(Trait obj)
        {
            ViewTrait trait = new ViewTrait();
            trait.Description = obj.Description;
            trait.TraitId = obj.TraitId;

            return trait;
        }

        public List<ViewTrait> ModelToViewModel(List<Trait> obj)
        {
            List<ViewTrait> traits = new List<ViewTrait>();
            for (int i = 0; i < obj.Count; i++)
            {
                ViewTrait t = new ViewTrait(
                obj[i].TraitId,
                obj[i].Description
                );
                traits.Add(t);
            }

            return traits;
        }

        public Trait ViewModelToModel(ViewTrait obj)
        {
            Trait trait = new Trait();
            trait.Description = obj.Description;
            trait.TraitId = obj.TraitId;

            return trait;
        }

        public List<Trait> ViewModelToModel(List<ViewTrait> obj)
        {
            List<Trait> traits = new List<Trait>(obj.Count);
            for (int i = 0; i < obj.Count; i++)
            {
                traits[i].TraitId = obj[i].TraitId;
                traits[i].Description = obj[i].Description;
            }

            return traits;
        }
    }
}
