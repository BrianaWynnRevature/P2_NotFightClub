using Microsoft.AspNetCore.Mvc;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.Models;
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
    public class TraitController : ControllerBase
    {
        private readonly IRepository<ViewTrait, int> _repo;

        public TraitController(IRepository<ViewTrait, int> repo)
        {
            _repo = repo;

        }
        // GET: api/<TraitController>
        [HttpGet]
        public async Task<ActionResult<List<ViewTrait>>> Get()
        {
            return Ok( await _repo.Read());
        }

        // GET api/<TraitController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TraitController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TraitController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TraitController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
