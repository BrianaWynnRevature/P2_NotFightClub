using Microsoft.AspNetCore.Mvc;
using NotFightClub_Data;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotFightClub_WebAPI.Controllers
{
  [Route("api")]
  [ApiController]
  public class FightController : Controller
  {
    private readonly P2_NotFightClubContext _context;


    private readonly IRepository<ViewFight, string> _fr;

    public FightController(IRepository<ViewFight, string> fr, P2_NotFightClubContext context)
    {
      _fr = fr;
      _context = context;
    }

    //[HttpGet]
    //public async Task<ViewFight> Get()
    //{

    //}
  }
}
