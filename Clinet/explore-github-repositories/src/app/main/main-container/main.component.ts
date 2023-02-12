import {
  Component,
  ElementRef,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import { repositoriesResponse, repository } from 'src/assets/models/repository';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdministrationRepository } from 'src/app/services/administration-repository';
import { Router } from '@angular/router';
import { AdministrationBookmarks } from 'src/app/services/administration-Bookmarks';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [AdministrationRepository, AdministrationBookmarks],
})
export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdministrationRepository,
    private serviceBookmarks: AdministrationBookmarks
  ) {}

  repoItems: repository[] = [];

  ngOnInit() {
    if (!localStorage.getItem('JWTtoken')) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(Inputvalue: HTMLInputElement) {
    this.service?.getRepositories(Inputvalue.value).subscribe({
      next: (res: repositoriesResponse) => {
        if (res.total_count != 0) {
          this.repoItems = res.repositories;
        } else {
          alert('No Repositories found ');
        }
      },
      error: (e: HttpErrorResponse) => {
        alert(e.message);
      },
    });

    return false;
  }

  navBookmarks() {
    let repositories = this.serviceBookmarks.getBookmarks() ?? [];
    if (repositories) {
      this.repoItems = repositories;
    }
  }
}
