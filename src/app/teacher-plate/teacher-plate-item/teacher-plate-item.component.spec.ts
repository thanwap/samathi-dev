import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPlateItemComponent } from './teacher-plate-item.component';

describe('TeacherPlateItemComponent', () => {
  let component: TeacherPlateItemComponent;
  let fixture: ComponentFixture<TeacherPlateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPlateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPlateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
