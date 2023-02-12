import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { MainComponent } from './main/main-container/main.component';
import { HeaderComponent } from './header/header.component';
import { GalleryItemsComponent } from './main/main-gallery-items/gallery-items.component';
import { MainModalCenterComponent } from './main/main-modal-center/main-modal-center.component';
import { CardImgComponent } from './main/main-gallery-items/gallery-card-img/card-img.component';
import { ModalBodyComponent } from './main/main-modal-center/modal-body/modal-body.component';
import { LoginComponent } from './login/login.component';
import { MainGalleryItemsBookmarksComponent } from './main-gallery-items-bookmarks/main-gallery-items-bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    GalleryItemsComponent,
    CardImgComponent,
    MainModalCenterComponent,
    ModalBodyComponent,
    LoginComponent,
    MainGalleryItemsBookmarksComponent,
  ],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
