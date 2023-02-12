using GitHub_Repo_Finder.Beans.User;
using GitHub_Repo_Finder.Beans.User.User;
using GitHub_Repo_Finder.Mangments;
using GitHub_Repo_Finder.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace GitHub_Repo_Finder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        public IAuth AuthService;

        public AuthController(IAuth authService)
        {
            this.AuthService= authService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserDto request)
        {
            ActionResult<string> result = await this.AuthService.Login(request);

            return result;
        }



    }
}
