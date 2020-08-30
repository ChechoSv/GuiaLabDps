import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  registro=[];
  empleado:any;
  nombre:string;
  sueldo:number;
  sueldoFinal:number;
  contador:number;
  descuentos:number;

  constructor() { }

  ngOnInit(){
    this.nombre="";
    this.sueldo=0;
    
    this.contador=0;

  }
  
  ingresar(){
    let afp = 0.051;
    let isss = 0.073;
    let renta = 0.11;
    this.descuentos = this.sueldo*afp  + this.sueldo*isss + this.sueldo*renta;
    this.sueldoFinal = this.sueldo - this.descuentos;
    this.empleado={"nombre":this.nombre,"sueldo":this.sueldo,"sueldoF":this.sueldoFinal};
    this.registro.push(this.empleado);
    this.contador++;
    

  }
}
