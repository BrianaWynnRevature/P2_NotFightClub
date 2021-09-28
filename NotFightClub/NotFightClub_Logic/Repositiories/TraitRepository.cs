using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotFightClub_Logic.Repositiories
{
    public class TraitRepository : IRepository<ViewTrait, int>
    {
        public Task<ViewTrait> Add(ViewTrait obj)
        {
            throw new NotImplementedException();
        }

        public Task<ViewTrait> Read(int obj)
        {
            throw new NotImplementedException();
        }
    }
}
