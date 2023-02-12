namespace GitHub_Repo_Finder.Entities.Repositories
{
    public class Repository
    {
        public Repository(string name, string avatar_url, string ownerName)
        {
            Name = name;
            Avatar_url = avatar_url;
            OwnerName = ownerName;
        }

        public string Name { get; set; } = string.Empty;

        public string Avatar_url { get; set; } = string.Empty;

        public string OwnerName { get; set; } = string.Empty;

    }
}