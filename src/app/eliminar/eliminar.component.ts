import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Personal } from '../models/personal';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  mensajeEliminado:string="";
  timeoutId:any;

  empleados:Personal[] = [];

  constructor(private servicio:EmpleadosService){}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void{
    this.empleados = this.servicio.getAll();

  }

  eliminarEmpleado(id:number){
    this.servicio.delete(id);
    console.log(`Empleados con id ${id} eliminado`);
    this.cargarEmpleados();
    this.mensajeEliminado=`Empleado con id ${id} eliminado`;

    clearTimeout(this.timeoutId);

    this.timeoutId=setTimeout(()=>{
      this.mensajeEliminado="";
    }, 3000);
  }
}
