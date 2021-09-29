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
  public class FightRepository : IRepository<ViewFight, int>
  {
    public Task<ViewFight> Add(ViewFight obj)
    {
      throw new NotImplementedException();
    }

    public Task<ViewFight> Read(int obj)
    {
        throw new NotImplementedException();
    }

    }
}
