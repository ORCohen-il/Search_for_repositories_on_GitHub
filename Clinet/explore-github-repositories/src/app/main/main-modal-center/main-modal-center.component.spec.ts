import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainModalCenterComponent } from './main-modal-center.component';

describe('MainModalCenterComponent', () => {
  let component: MainModalCenterComponent;
  let fixture: ComponentFixture<MainModalCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainModalCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainModalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
