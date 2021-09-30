using NotFightClub_Logic.Interfaces;
using NotFightClub_Models.Models;
using NotFightClub_Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotFightClub_Logic.Mappers
{
    public class UserInfoMapper : IMapper<UserInfo, ViewUserInfo>
    {
        public ViewUserInfo ModelToViewModel(UserInfo user)
        {
            ViewUserInfo viewUser = new ViewUserInfo();
            viewUser.UserId = user.UserId;
            viewUser.UserName = user.UserName;
            viewUser.Email = user.Email;

            //convert from datetime to string

            viewUser.Dob = user.Dob;
            viewUser.Pword = user.Pword;
            viewUser.Bucks = user.Bucks;

            return viewUser;
           

            
        }

        public List<ViewUserInfo> ModelToViewModel(List<UserInfo> obj)
        {
            throw new NotImplementedException();
        }

        public UserInfo ViewModelToModel(ViewUserInfo viewUser)
        {
            UserInfo user = new UserInfo();
            Guid g = Guid.NewGuid();
                      
            user.UserName = viewUser.UserName;
            user.Email = viewUser.Email;

            //convert string from js to datetime c#
            //DateTime d;
            //DateTime.TryParseExact(viewUser.Dob, @"yyyy-MM-dd\Z", CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.AssumeUniversal, out DateTime d);
            user.Dob = viewUser.Dob;
            user.Pword = viewUser.Pword;
            user.Bucks = viewUser.Bucks;

            user.UserId = g;

            return user;
        }

        public List<UserInfo> ViewModelToModel(List<ViewUserInfo> obj)
        {
            throw new NotImplementedException();
        }
    }
}
