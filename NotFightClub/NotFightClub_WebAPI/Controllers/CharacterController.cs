using Microsoft.AspNetCore.Mvc;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NotFightClub_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        private readonly IRepository<ViewCharacter> _cr;

        public CharacterController(IRepository<ViewCharacter> cr)
        {
            _cr = cr;
           
        }

        // GET: api/<CharacterController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CharacterController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CharacterController>
        [HttpPost("/[action]")]
        public async Task<ActionResult<ViewCharacter>> Post([FromBody] ViewCharacter viewCharacter)
        {
            if (!ModelState.IsValid) return BadRequest("Invalid data.");
            //call to repository to add user
            //return the result
            //Console.WriteLine(viewUser);
            var createdCharacter = await _cr.Add(viewCharacter);
            return Ok(createdCharacter);
        }
        // PUT api/<CharacterController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CharacterController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
