import { Injectable } from '@angular/core';
import datos from './data/datos.json'; 
import { Personal } from './models/personal';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Personal[]=datos;

  constructor() { }

  ngOnInit():void{

  }

  getAll():Personal[]{
    const recuperaDatos: Personal[] = JSON.parse(localStorage.getItem('trabajadores') ?? '[]');
    if (recuperaDatos.length === 0){
      this.empleados=datos;
    }else{
      this.empleados=recuperaDatos;
    }
    return this.empleados;
  }

  getById(idEmp: number): Personal | null{
    const encontrado = this.empleados.find(emp => emp.id === idEmp);
    return encontrado || null;
  }
  create(objeto: Personal):void{
      this.empleados.push(objeto);

      localStorage.setItem('trabajadores', JSON.stringify(this.empleados));
     }
     
  update(objeto: Personal): void{
    const index = this.empleados.findIndex(emp => emp.id === objeto.id);
    if (index !== -1){
      this.empleados[index] = objeto;
      
      localStorage.setItem('trabajadores', JSON.stringify(this.empleados));
    }
  }
  delete(idEmp: number): void{
    const index = this.empleados.findIndex(emp => emp.id == idEmp);
    if (index !== -1){
     this.empleados.splice(index, 1);
     
     localStorage.setItem('trabajadores', JSON.stringify(this.empleados));
    }
  }
}
