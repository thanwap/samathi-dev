import { ThaiDatePipe } from './../../directives/thaidate.pipe';
import { TeacherPlateService } from './../teacher-plate.service';
import { Component, OnInit, ElementRef, ViewChild, PipeTransform } from '@angular/core';
import html2canvas from 'html2canvas';
import { TeacherPlate } from '../teacher-plate.model';

@Component({
  selector: 'app-teacher-plate-item',
  templateUrl: './teacher-plate-item.component.html',
  styleUrls: ['./teacher-plate-item.component.scss']
})
export class TeacherPlateItemComponent implements OnInit {
  plateInfo: TeacherPlate;
  blockWidth: number = 0;
  adjustPosition: number = 0;
  currentPosition:number = 0;
  currentTop: number = 0;
  currentButtom:number = 0;
  buttomPosition: number = 0;
  isAdjusting: boolean = false;


  @ViewChild('plate', {static: false}) plate: ElementRef;
  @ViewChild('plateDummy', {static: false}) plateDummy: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @ViewChild('downloadLink', {static: false}) downloadLink: ElementRef;

  constructor(public teacherPlateService: TeacherPlateService, private pipe: ThaiDatePipe) { }

  ngOnInit() {
    this.plateInfo = this.teacherPlateService.getPlateInfo();
  }

  showAdjustTool() {
    let platePictureElement = this.plate.nativeElement.querySelectorAll('.plate-picture')[0];
    let imageElement = this.plate.nativeElement.querySelectorAll('.plate-picture img')[0];
    this.blockWidth = (platePictureElement.offsetWidth - imageElement.offsetWidth)/2;
    this.adjustPosition = this.blockWidth - 5;
    this.buttomPosition = 0;
    this.isAdjusting = true;
  }

  finishAdjust() {
    this.isAdjusting = false;
  }

  dragImageWidthBlock(e) {
    this.blockWidth += e.distance.x - this.currentPosition;
    this.currentPosition = e.distance.x;
  }

  dragImageWidthBlockClear(e) {
    this.currentPosition = 0;
  }

  dragImageBottomBlock(e) {
    this.buttomPosition += e.distance.y - this.currentButtom;
    this.currentButtom = e.distance.y;
  }

  dragImageBottomBlockClear(e) {
    this.currentButtom = 0;
  }

  downloadImage() {
    html2canvas(this.plateDummy.nativeElement, {
      scrollY: 0,
      scrollX: 0,
    }).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download =
        this.pipe.transform(this.plateInfo.date.toString(),'short')
        + ' ' + this.plateInfo.title + ' ' + this.plateInfo.teacherName + '.png';
      this.downloadLink.nativeElement.click();
    });
  }

}
