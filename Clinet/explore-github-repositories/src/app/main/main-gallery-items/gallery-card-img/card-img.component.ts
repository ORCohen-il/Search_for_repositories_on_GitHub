import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AdministrationBookmarks } from 'src/app/services/administration-Bookmarks';
import { AdministrationRepository } from 'src/app/services/administration-repository';
import { repository } from 'src/assets/models/repository';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss'],
  providers: [AdministrationBookmarks],
})
export class CardImgComponent {
  @Input()
  item!: repository;

  constructor(private service: AdministrationRepository,private BookmarkService :AdministrationBookmarks ) {}

  saveRepo(repo: repository) {
    this.service.saveRepository(repo).subscribe({
      next: (res: Boolean) => {
        if (res) {
          alert('Repo save successfully');
          this.BookmarkService.saveBookmark(repo);
        }else{
          alert('Eror save Repo');
        }
      },
      error: (e: HttpErrorResponse) => {
        if(e.status == 401){
          alert("Unauthorized")
        }
      },
    });
  }
}
