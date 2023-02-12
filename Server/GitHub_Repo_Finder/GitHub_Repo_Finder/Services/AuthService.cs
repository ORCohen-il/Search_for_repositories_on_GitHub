using GitHub_Repo_Finder.Beans.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GitHub_Repo_Finder.Services
{
    public class AuthService : IAuth
    {
        private readonly IConfigService ConfigService;
        public AuthService(IConfigService configService)
        {
            this.ConfigService = configService;
        }

        public async Task<ActionResult<string>> Login(UserDto request)
        {
            if (Verify(request))
            {
                string token = CreateToken(request);

                return new ObjectResult(token);
            }

            return new UnauthorizedObjectResult("Authorization failed.");

        }

        private string CreateToken(UserDto request)
        {

            var tokenDescriptor =  TokenDescriptor(request);

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);

            return jwtToken;
        }


        private SecurityTokenDescriptor TokenDescriptor(UserDto request)
        {
            var issuer = ConfigService.GetValue("Jwt:Issuer");
            var audience = ConfigService.GetValue("Jwt:Audience");
            var key = Encoding.ASCII.GetBytes(ConfigService.GetValue("Jwt:Key"));

            return new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim("Id", Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, request.Username),
                new Claim(JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString())
             }),
                Expires = DateTime.UtcNow.AddDays(1),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials
                (new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
        }

        private bool Verify(UserDto request) {

            var username = ConfigService.GetValue("AppSetting:UserName");
            var password = ConfigService.GetValue("AppSetting:Password");
            var passwordValid = request.Password.Equals(password, StringComparison.OrdinalIgnoreCase);
            var UserValid = request.Password.Equals(username, StringComparison.OrdinalIgnoreCase);

            if (passwordValid && UserValid) return true;

            return false;

        }
    
    }
}
