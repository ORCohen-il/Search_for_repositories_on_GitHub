using GitHub_Repo_Finder.Entities.Repositories;

namespace GitHub_Repo_Finder.Entities.Repositories
{
    public class Response
    {
        public int total_count { get; set; }
        public List<Item> items { get; set; }
    }
}
