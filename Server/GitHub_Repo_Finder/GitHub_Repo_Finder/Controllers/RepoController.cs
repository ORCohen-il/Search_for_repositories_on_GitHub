using AutoMapper;
using GitHub_Repo_Finder.DTOs;
using GitHub_Repo_Finder.Entities.Repositories;
using GitHub_Repo_Finder.Mangments;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GitHub_Repo_Finder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepoController : ControllerBase
    {
        public IRepository RepositoryMangment;
        private IMapper _Mapper { get; }

        public RepoController(IRepository repositoryMangment, IMapper mapper)
        {
            this.RepositoryMangment = repositoryMangment;
            this._Mapper = mapper;
        }

        [HttpPost]
        [Route("getRepsitories")]
        public async Task<ResponseDto> GetRepsitories([FromQuery] string repository_name) {


            Response response = await RepositoryMangment.GetRepositoriesByname(repository_name);

            return _Mapper.Map<ResponseDto>(response);
            
        }

        [HttpPost]
        [Route("saveBookmark")]
        [Authorize]
        public async Task<ActionResult<bool>> SaveBookmark([FromBody] Repository repository)
        {
            var response = await RepositoryMangment.SaveRepositoriesBookmark(repository);

            return response;

        }

        [HttpPost]
        [Route("getRepositoriesBookmark")]
        [Authorize]
        public async Task<ResponseDto> GetRepositoriesBookmark([FromQuery] string repository_name)
        {

            ResponseDto response = await RepositoryMangment.GetRepositoriesBookmark();

            return _Mapper.Map<ResponseDto>(response);

        }

    }
}
