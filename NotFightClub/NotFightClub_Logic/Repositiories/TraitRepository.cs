using Microsoft.EntityFrameworkCore;
using NotFightClub_Data;
using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.Models;
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
        private readonly P2_NotFightClubContext _dbContext = new P2_NotFightClubContext();
        private readonly IMapper<Trait, ViewTrait> _mapper;

        public TraitRepository(IMapper<Trait, ViewTrait> mapper)
        {
            _mapper = mapper;
        }
        public Task<ViewTrait> Add(ViewTrait obj)
        {
            throw new NotImplementedException();
        }

        public Task<ViewTrait> Read(int obj)
        {
            throw new NotImplementedException();
        }

        public async Task<List<ViewTrait>> Read()
        {

            List<Trait> traits = await _dbContext.Traits.ToListAsync();
            return _mapper.ModelToViewModel(traits);
        }
    }
}
