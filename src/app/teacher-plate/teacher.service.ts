import { Teacher } from './teacher.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private db: AngularFireDatabase) { }

  getTeachers(): Promise<Teacher[]> {
    return new Promise<Teacher[]>((resolve, reject) => {
      this.db.list('/teacher')
      .snapshotChanges()
      .subscribe(result => {
        resolve(result.map(action => {
          let val = action.payload.val();
          return new Teacher(
            +action['key'],
            val['prefix'],
            val['name'],
            val['lastName']);
        }));
      });
    })


  }
}
