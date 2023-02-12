import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { repositoriesResponse, repository } from 'src/assets/models/repository';
import { environment } from '../../../src/environment';

@Injectable()
export class AdministrationRepository {
  constructor(private httpClient: HttpClient) {}

  getRepositories(searchValue: string) {
    return this.httpClient.post<repositoriesResponse>(
      `${environment.serverUrl}/api/Repo/getRepsitories`,
      {},
      {
        headers: {},
        params: {
          repository_name: searchValue,
        },
      }
    );
  }

  // bookmark
  saveRepository(Repo: repository) {
    return this.httpClient.post<boolean>(
      `${environment.serverUrl}/api/Repo/saveBookmark`,
      Repo,{
        headers:{'Authorization': `Bearer ${localStorage.getItem("JWTtoken")?? ""}`}
      }
    );
  }

  getBookmarksRepositories() {
    let token = localStorage.getItem('JwtToken');
    return this.httpClient.post<repositoriesResponse>(
      `${environment.serverUrl}/api/Repo/getRepsitories`,
      {},
      {
        headers: {},
        params: {
          repository_name: '',
        },
      }
    );
  }
}
