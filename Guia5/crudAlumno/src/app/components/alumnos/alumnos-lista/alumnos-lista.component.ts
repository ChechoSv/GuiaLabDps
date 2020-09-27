import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../../services/alumno.service';
import {Alumno} from '../../../models/alumno';
import {element} from 'protractor';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
alumnoList:Alumno[];
  constructor(
    private alumnoService:AlumnoService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.alumnoService.getAlumnos()
    .snapshotChanges()
    .subscribe(item => {
      this.alumnoList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.alumnoList.push(x as Alumno);
      });
    });
  }
  onEdit(alumno:Alumno){
    this.alumnoService.selectedAlumno = Object.assign({},alumno);
  }

  onDelete($key:string){
    this.alumnoService.deleteAlumno($key);
    this.toastr.success('Exito','Alumno Eliminado');

  }

}
