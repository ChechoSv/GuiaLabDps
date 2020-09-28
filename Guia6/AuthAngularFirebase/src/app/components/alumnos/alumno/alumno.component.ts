import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Alumno} from '../../../models/alumno';
import {AlumnoService} from '../../../services/alumno.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(public alumnoService:AlumnoService) { }

  ngOnInit() {
    this.alumnoService.getAlumnos();
    this.resetForm();
  }

  onSubmit(alumnoForm:NgForm){
    if(alumnoForm.value.$key == null)
    this.alumnoService.insertAlumno(alumnoForm.value);
    else
    this.alumnoService.updateAlumno(alumnoForm.value);
    this.resetForm(alumnoForm);
  }
  resetForm(alumnoForm?:NgForm){
    if(alumnoForm != null)
    alumnoForm.reset();
    this.alumnoService.selectedAlumno = new Alumno();
  }

}
