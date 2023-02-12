
using GitHub_Repo_Finder.Beans.User;
using Microsoft.AspNetCore.Mvc;

namespace GitHub_Repo_Finder.Services
{
    public interface IAuth
    {
        public Task<ActionResult<string>> Login(UserDto request);
    }
}
