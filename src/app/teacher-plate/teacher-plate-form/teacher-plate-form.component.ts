import { TeacherService } from './../teacher.service';
import { ChapterService } from './../chapter.service';
import { TeacherPlateService } from './../teacher-plate.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-plate-form',
  templateUrl: './teacher-plate-form.component.html',
  styleUrls: ['./teacher-plate-form.component.scss']
})
export class TeacherPlateFormComponent implements OnInit {
  imageSrc: any;
  chapters: any;
  teachers: Teacher[];
  teacherForm = new FormGroup({
    date: new FormControl(null),
    titleSelect: new FormControl(''),
    title: new FormControl(''),
    teacherNameSelect: new FormControl(''),
    teacherName: new FormControl('')
  });
  constructor(
    private teacherService: TeacherService,
    private chapterService: ChapterService,
    private teacherPlateService: TeacherPlateService) { }

  ngOnInit() {
    this.chapterService.getChapters()
      .then(result => {
        this.chapters = result;
      });

    this.teacherService.getTeachers()
      .then(result => {
        this.teachers = result;
      });

    let plateInfo = this.teacherPlateService.getPlateInfo();

    this.teacherForm.patchValue({
      date: plateInfo.date,
      title: plateInfo.title,
      teacherName: plateInfo.teacherName
    });

    this.onChanges();
  }

  onChanges(): void {
    this.teacherForm.valueChanges.subscribe(val => {
      this.teacherPlateService.setDate(val.date);
      this.teacherPlateService.setTile(val.title);
      this.teacherPlateService.setTeacherName(val.teacherName);
    });

    this.teacherForm
      .get('titleSelect')
      .valueChanges
      .subscribe(val => {
        this.teacherForm.patchValue({ title: val });

      });

      this.teacherForm
      .get('teacherNameSelect')
      .valueChanges
      .subscribe(val => {
        this.teacherForm.patchValue({ teacherName: val });

      });
  }

  readURL(fileInput: any): void {
    let fileData = <File>fileInput.target.files[0];
    var mimeType = fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = (_event) => {
      this.teacherPlateService.setImage(reader.result);
    }
}

}
