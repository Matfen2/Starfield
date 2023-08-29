import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPageComponent } from './star-page.component';

describe('StarPageComponent', () => {
  let component: StarPageComponent;
  let fixture: ComponentFixture<StarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarPageComponent]
    });
    fixture = TestBed.createComponent(StarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
