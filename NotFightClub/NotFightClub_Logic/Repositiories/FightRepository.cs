using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.ViewModels;
using NotFightClub_Models.Models;

namespace NotFightClub_Logic.Repositiories
{
  class FightRepository : IRepository<ViewFight>
  {
    public Task<ViewFight> Add(ViewFight obj)
    {
      throw new NotImplementedException();
    }
  }
}
