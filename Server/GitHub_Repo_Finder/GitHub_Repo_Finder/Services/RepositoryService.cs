using AutoMapper;
using GitHub_Repo_Finder.DTOs;
using GitHub_Repo_Finder.Entities.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;


namespace GitHub_Repo_Finder.Mangments
{
    public class RepositoryService : IRepository
    {
        private RestClient _client ;
        private IConfiguration _Configuration;
        private readonly ILogger<RepositoryService> _logger;

        public RepositoryService(IConfiguration configuration, ILogger<RepositoryService> logger) 
        {
            _Configuration = configuration;
            _logger = logger;
        }

        public async Task<Response> GetRepositoriesByname(string repositoryName)
        {
            var GitRepositoriesList = new Response { };

            if (repositoryName == "") {
                return GitRepositoriesList;
            }
            try
            {
                this._client = new RestClient();
                var request = new RestRequest(_Configuration.GetSection("AppSetting:GitApiUrl").Value, (Method)DataFormat.Json);
                request.AddParameter("q", repositoryName);

                RestResponse<Response> response = await _client.ExecuteGetAsync<Response>(request);
                Response res = JsonConvert.DeserializeObject<Response>(response.Content?? string.Empty)?? new Response() { };

                return res;

            }
            catch (Exception e)
            {
                _logger.LogInformation("logTime at: {time} , Eror Message {eror} ", DateTimeOffset.UtcNow, e.Message);
                return GitRepositoriesList;
            }

        }

        public async Task<ActionResult<bool>> SaveRepositoriesBookmark(Repository repository)
        {
            return true;
        }

        public async Task<ResponseDto> GetRepositoriesBookmark()
        {
            var GitRepositoriesList = new ResponseDto { };

            return GitRepositoriesList;
        }



    }
}
