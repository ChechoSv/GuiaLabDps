import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireDatabaseModule,AngularFireList} from '@angular/fire/database';
import {Alumno} from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  AlumnoList:AngularFireList<any>;
  selectedAlumno: Alumno = new Alumno();

  constructor(private firebase:AngularFireDatabase) { }
  getAlumnos(){
    return this.AlumnoList= this.firebase.list('alumnos');
  }

  insertAlumno(alumno:Alumno){
    this.AlumnoList.push({
      name:alumno.name,
      lastname:alumno.lastname,
      age:alumno.age
    });
  }

  updateAlumno(alumno:Alumno){
    this.AlumnoList.update(alumno.$key,{
      name:alumno.name,
      lastname:alumno.lastname,
      age:alumno.age
    });
  }

  deleteAlumno($key:string){
    this.AlumnoList.remove($key);
  }

}
