using System.Collections.Generic;
using GitHub_Repo_Finder.DTOs;
using GitHub_Repo_Finder.Entities.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GitHub_Repo_Finder.Mangments
{
    public interface IRepository
    {
        public Task<Response> GetRepositoriesByname(string repoName);
        public Task<ActionResult<bool>> SaveRepositoriesBookmark(Repository repository);
        public Task<ResponseDto> GetRepositoriesBookmark();

    }
}
