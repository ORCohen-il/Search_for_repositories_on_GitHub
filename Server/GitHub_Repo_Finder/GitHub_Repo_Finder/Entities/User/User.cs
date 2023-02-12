
namespace GitHub_Repo_Finder.Beans.User.User
{
    public class User :IUser
    {
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string getPassword()
        {
            throw new NotImplementedException();
        }

        public string getUsername()
        {
            throw new NotImplementedException();
        }

        public static implicit operator Task<object>(User v)
        {
            throw new NotImplementedException();
        }
    }
}
