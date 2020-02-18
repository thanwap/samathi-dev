import { Injectable, OnInit } from '@angular/core';
import { TeacherPlate } from './teacher-plate.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherPlateService implements OnInit {
  private plateInfo: TeacherPlate;

  constructor() {
    this.plateInfo = new TeacherPlate(
      '',
      ''
    );
  }

  ngOnInit(): void {

  }

  getPlateInfo(): TeacherPlate {
    return this.plateInfo;
  }

  setDate(date: Date) {
    this.plateInfo.date = date;
  }

  setTile(title: string): void {
    this.plateInfo.title = title;
  }

  setTeacherName(name: string): void {
    this.plateInfo.teacherName = name;
  }

  setImage(imageSrc){
    this.plateInfo.image = imageSrc;
  }
}
