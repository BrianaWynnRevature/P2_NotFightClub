using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotFightClub_Data;
using NotFightClub_Models.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NotFightClub_WebAPI.Controllers
{
  [Route("api/[controller]")]
  public class UserController : Controller
  {
    private readonly P2_NotFightClubContext _context;

    public UserController(P2_NotFightClubContext context)
    {
      _context = context;
    }

    // GET: api/values
    [HttpGet]
    public IEnumerable<UserInfo> Get()
    {
      using (P2_NotFightClubContext entities = new P2_NotFightClubContext())
      {
        return entities.UserInfos.ToList();
      }
    }

    // GET api/values/5
    [HttpGet("my-profile/{id}")]
    public async Task<ActionResult<UserInfo>> GetUserById(Guid id)
    {
      var user = await _context.UserInfos.FindAsync(id);
      return user;
    }

    // // POST api/values
    // [HttpPost]
    // public void Post([FromBody] string value)
    // {
    // }

    // // PUT api/values/5
    // [HttpPut("{id}")]
    // public void Put(int id, [FromBody] string value)
    // {
    // }

    // // DELETE api/values/5
    // [HttpDelete("{id}")]
    // public void Delete(int id)
    // {
    // }
  }
}
