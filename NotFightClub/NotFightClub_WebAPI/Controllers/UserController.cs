using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NotFightClub_Data;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.Models;
using NotFightClub_Models.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NotFightClub_WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IRepository<ViewUserInfo> _ur;

        public UserController(IRepository<ViewUserInfo> ur)
        {
            _ur = ur;
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
        // [HttpGet("{id}")]
        // public string Get(int id)
        // {
        //     return "value";
        // }

        // POST api/values
        [HttpPost("/[action]")]
        public async Task<ActionResult<ViewUserInfo>> Register([FromBody] ViewUserInfo viewUser)
        {
            if (!ModelState.IsValid) return BadRequest("Invalid data.");
            //call to repository to add user
            //return the result
            //Console.WriteLine(viewUser);
            var registeredUser = await _ur.Add(viewUser);
            return Ok(registeredUser);
        }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // 
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
