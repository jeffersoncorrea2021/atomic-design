import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductThumbnailComponent } from './app-product-thumbnail.component';

describe('AppProductThumbnailComponent', () => {
  let component: AppProductThumbnailComponent;
  let fixture: ComponentFixture<AppProductThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
