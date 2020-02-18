import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPlateFormComponent } from './teacher-plate-form.component';

describe('TeacherPlateFormComponent', () => {
  let component: TeacherPlateFormComponent;
  let fixture: ComponentFixture<TeacherPlateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPlateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPlateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
