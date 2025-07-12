import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personal } from '../models/personal';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  mensajeExito:string='';
   
   trabajador: Personal = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: '',
  };

  constructor(private empleadosService:EmpleadosService){  }

  esFemenino: boolean = false;

  asignarFotoAleatoria() {
    let genero;
    const id = Math.floor(Math.random() * 100);
    if (this.esFemenino){
       genero = 'women'  ;
    }else{
       genero =   'men';
    }
    this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
  }

  guardar() {     
    this.empleadosService.create(this.trabajador);
    this.limpiar();
    console.log('Trabajador:', this.trabajador);
    console.log('¿Es femenino?:', this.esFemenino);
  }

  limpiar():void{
     this.trabajador = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: '',
  };

  this.esFemenino = false;

  this.mensajeExito = '¡Formulario enviado exitosamente!';

  setTimeout(() => {
    this.mensajeExito = '';
  }, 3000);
  }

}