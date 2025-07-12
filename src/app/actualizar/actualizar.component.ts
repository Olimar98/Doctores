import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Personal } from '../models/personal';

@Component({
  selector: 'app-actualizar',
  imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {

  empleados:Personal[]=[];
  
  constructor(private servicio:EmpleadosService, private router: Router){}

  ngOnInit(): void {
    this.empleados=this.servicio.getAll();
  }

  irAEditar(id:number){
    this.router.navigate(['/editar']);
  }

}
