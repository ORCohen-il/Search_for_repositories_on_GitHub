using AutoMapper;
using GitHub_Repo_Finder.DTOs;
using GitHub_Repo_Finder.Entities.Repositories;

namespace GitHub_Repo_Finder.AutoMapper
{
    public class RepoProfile : Profile
    {
        public RepoProfile()
        {

            CreateMap<ResponseDto, Response>()
              .ForMember(dest => dest.total_count, opt => opt.MapFrom(src => src.total_count))
              .ForMember(dest => dest.items, opt => opt.Ignore());

            CreateMap<Response, ResponseDto>()
              .ForMember(dest => dest.total_count, opt => opt.MapFrom(src => src.total_count))
              .ForMember(dest => dest.Repositories, opt => opt.MapFrom(src=>src.items.Select(x=>new Repository(x.name,x.owner.avatar_url,x.owner.login))));

            //.ForMember(dest => dest.items, opt => opt.MapFrom(src => src.Select(e => new ResponseDto(e.Name, e.Avatar_url, e.OwnerName))));


            //CreateMap<Category, CategoryDto>().ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.CategoryName));
        }
    }
}
