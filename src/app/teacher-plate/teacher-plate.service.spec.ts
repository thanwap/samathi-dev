import { TestBed } from '@angular/core/testing';

import { TeacherPlateService } from './teacher-plate.service';

describe('TeacherPlateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherPlateService = TestBed.get(TeacherPlateService);
    expect(service).toBeTruthy();
  });
});
