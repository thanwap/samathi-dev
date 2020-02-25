import { TeacherService } from './../teacher.service';
import { ChapterService } from './../chapter.service';
import { TeacherPlateService } from './../teacher-plate.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { Teacher } from '../teacher.model';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-teacher-plate-form',
  templateUrl: './teacher-plate-form.component.html',
  styleUrls: ['./teacher-plate-form.component.scss']
})
export class TeacherPlateFormComponent implements OnInit {
  chapters: any;
  imageChangedEvent: any = '';
  teachers: Teacher[];
  teacherForm = new FormGroup({
    date: new FormControl(null),
    titleSelect: new FormControl(''),
    title: new FormControl(''),
    teacherNameSelect: new FormControl(''),
    teacherName: new FormControl(''),
    plateWidth: new FormControl(543)
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
      this.teacherPlateService.setPlateWidth(val.plateWidth);
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



    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.teacherPlateService.setImage(event.base64);
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
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
