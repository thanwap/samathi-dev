import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPlateComponent } from './teacher-plate.component';

describe('TeacherPlateComponent', () => {
  let component: TeacherPlateComponent;
  let fixture: ComponentFixture<TeacherPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
