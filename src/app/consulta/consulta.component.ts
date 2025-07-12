import { Component } from '@angular/core';
import { Personal } from '../models/personal';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  id!: number;
  empleado!: Personal | null;

  constructor(
    private route: ActivatedRoute,
    private servicio: EmpleadosService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));
      this.empleado = this.servicio.getById(this.id);
    });

  }


}
