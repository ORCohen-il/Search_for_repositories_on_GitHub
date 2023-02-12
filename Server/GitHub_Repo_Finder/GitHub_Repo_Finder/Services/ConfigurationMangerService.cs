namespace GitHub_Repo_Finder.Services
{
    public class ConfigurationMangerService : IConfigService
    {
   
            private readonly IConfiguration configuration;
            public ConfigurationMangerService(IConfiguration configuration)
            {
                this.configuration = configuration;
            }

            public string GetValue(string key)
            {
                return configuration.GetSection(key).Value;
            }
        
    }
}
