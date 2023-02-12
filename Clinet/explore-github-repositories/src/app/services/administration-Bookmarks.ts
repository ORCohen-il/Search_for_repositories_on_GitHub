import { Injectable } from '@angular/core';
import { repository } from 'src/assets/models/repository';

@Injectable()
export class AdministrationBookmarks {
  constructor() {}

  saveBookmark(repo: repository) {
    var repositoriesAsJson: repository[] = [];

    var repositories = sessionStorage.getItem('repositories');

    if (repositories) {
      
        var convertJson:repository[] = JSON.parse(repositories);
        convertJson.push(repo);
        sessionStorage.setItem(
            'repositories',
            JSON.stringify(convertJson)
          );

    } else {
      repositoriesAsJson.push(repo);
      sessionStorage.setItem(
        'repositories',
        JSON.stringify(repositoriesAsJson)
      );
    }
  }

  getBookmarks(): repository[] | undefined {
    var repositories = sessionStorage.getItem('repositories');
    if (repositories) {
      var repositoriesAsJson: repository[] = JSON.parse(repositories);
      return repositoriesAsJson;
    }
    return [];
  }
}
