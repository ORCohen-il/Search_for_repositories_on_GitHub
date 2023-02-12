import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainGalleryItemsBookmarksComponent } from './main-gallery-items-bookmarks/main-gallery-items-bookmarks.component';
import { MainComponent } from './main/main-container/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
