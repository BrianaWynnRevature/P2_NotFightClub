using Microsoft.AspNetCore.Mvc;
using NotFightClub_WebAPI.Dtos;
using PusherServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NotFightClub_Models.ViewModels;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Data;

namespace NotFightClub_WebAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TraitController : Controller
  {
    private readonly P2_NotFightClubContext _context;
    private readonly IRepository<ViewTrait, string> _ur;

    public TraitController(IRepository<ViewTrait, string> ur, P2_NotFightClubContext context)
    {
      _ur = ur;
      _context = context;
    }

    // POST api/<TraitController>
    [HttpPost]
    public async Task<ActionResult<ViewTrait>> Post([FromBody] ViewTrait viewTrait)
    {
      if (!ModelState.IsValid) return BadRequest("Invalid data.");
      //call to repository to add trait
      //return the result
      //Console.WriteLine(viewTrait);
      var newTrait = await _ur.Add(viewTrait);
      return Ok(newTrait);
    }
  }
}

