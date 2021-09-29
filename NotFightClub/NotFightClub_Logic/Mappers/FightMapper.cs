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
  public class FightMapper : IMapper<Fight, ViewFight>
  {
    public ViewFight ModelToViewModel(Fight obj)
    {
      ViewFight viewFight = new ViewFight();
      viewFight.FightId = obj.FightId;
      viewFight.Winner = obj.Winner;
      viewFight.Loser = obj.Loser;
      viewFight.Date = obj.Date;
      viewFight.Result = obj.Result;
      viewFight.Location = obj.Location;
      viewFight.Weather = obj.Weather;

      return viewFight;
    }

    public Fight ViewModelToModel(ViewFight obj)
    {
      Fight fight = new Fight();
      fight.FightId = obj.FightId;
      fight.Winner = obj.Winner;
      fight.Loser = obj.Loser;
      fight.Date = obj.Date;
      fight.Result = obj.Result;
      fight.Location = obj.Location;
      fight.Weather = obj.Weather;

      return fight;
    }
  }
}
