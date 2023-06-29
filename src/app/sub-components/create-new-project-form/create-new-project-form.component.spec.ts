import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewProjectFormComponent } from './create-new-project-form.component';

describe('CreateNewProjectFormComponent', () => {
  let component: CreateNewProjectFormComponent;
  let fixture: ComponentFixture<CreateNewProjectFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewProjectFormComponent]
    });
    fixture = TestBed.createComponent(CreateNewProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
