import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleryItemsBookmarksComponent } from './main-gallery-items-bookmarks.component';

describe('MainGalleryItemsBookmarksComponent', () => {
  let component: MainGalleryItemsBookmarksComponent;
  let fixture: ComponentFixture<MainGalleryItemsBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGalleryItemsBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGalleryItemsBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
