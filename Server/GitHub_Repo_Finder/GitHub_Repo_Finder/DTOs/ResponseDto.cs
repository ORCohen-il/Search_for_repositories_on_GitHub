using GitHub_Repo_Finder.Entities.Repositories;

namespace GitHub_Repo_Finder.DTOs
{
    public class ResponseDto
    {

        public ResponseDto()
        {
        }

        public int total_count { get; set; }
        public List<Repository> Repositories { get; set; }

    }
}
