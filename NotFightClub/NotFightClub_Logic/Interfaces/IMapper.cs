using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotFightClub_Logic.Interfaces
{
    public interface IMapper<T, Y>
    {
        public T ViewModelToModel(Y obj);

        public Y ModelToViewModel(T obj);
       
    }
}
