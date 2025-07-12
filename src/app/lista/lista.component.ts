import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Personal } from '../models/personal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  misDoctores!:Personal[];

  constructor(private empleadosService:EmpleadosService){}
  ngOnInit(): void{
    this.misDoctores=this.empleadosService.getAll();
    console.log(this.empleadosService);
    let emp;
    emp= this.empleadosService.getById(1794);
    console.log(emp);
    emp= this.empleadosService.getById(4212);
    console.log(emp);

    this.empleadosService.delete(4114);
    this.empleadosService.delete(5007);
  }
}
