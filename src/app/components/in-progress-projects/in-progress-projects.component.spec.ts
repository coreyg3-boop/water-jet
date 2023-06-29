import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressProjectsComponent } from './in-progress-projects.component';

describe('InProgressProjectsComponent', () => {
  let component: InProgressProjectsComponent;
  let fixture: ComponentFixture<InProgressProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InProgressProjectsComponent]
    });
    fixture = TestBed.createComponent(InProgressProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
