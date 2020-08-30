import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {
  tipo;
  opcionSeleccionado:string;
  cantidad:number;
  valorFinal:number;

  constructor() { }

  ngOnInit(){
    this.tipo=["Regular","Especial","Diesel"];
    this.opcionSeleccionado="Selecciona";
    this.cantidad=0;
    this.valorFinal=0;

  }

  capturar(){
    switch(this.opcionSeleccionado){
      case'Regular':
      let precioR = 4.05;
      this.valorFinal = this.cantidad*precioR;
      break;
      case'Especial':
      let precioE = 4.25;
      this.valorFinal = this.cantidad*precioE;
      break;
      case'Diesel':
      let precioD = 3.96;
      this.valorFinal = this.cantidad*precioD;
      
      break;
  }
}


}
