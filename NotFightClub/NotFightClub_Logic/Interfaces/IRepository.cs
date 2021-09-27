using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotFightClub_Logic.Interfaces
{
    public interface IRepository<T>
    {
        public Task<T> Add(T obj);

        public Task<T> Read(string selector);
    }
}
