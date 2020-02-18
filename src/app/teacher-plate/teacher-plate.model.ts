export class TeacherPlate {
  image: string | ArrayBuffer;
  date: Date;
  title: string;
  teacherName: string;

  constructor(title: string, name: string){
    this.image = 'http://placehold.it/180',
    this.date = new Date();
    this.title = title;
    this.teacherName = name;
  }
}
