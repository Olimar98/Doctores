import { Component } from '@angular/core';
import { Personal } from '../models/personal';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
guardar() {
throw new Error('Method not implemented.');
}

  trabajador:Personal={
   id:0,
   nombre:"",
   especialidad: "",
    anios_experiencia: 0,
    ciudad: "",
    telefono: "",
    foto: ""

  };

  mensajeExito:string="";
  esFemenino:boolean=false;

  constructor(private servicio:EmpleadosService, private router:Router, private route:ActivatedRoute ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( params => {
      const id=Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      if(encontrado!==null){
        this.trabajador = {...encontrado};
      }   
      else{
        this.mensajeExito="Empleado no encontrado";
      }

    });
  }

    actualizar():void{
      this.servicio.update(this.trabajador);
      this.mensajeExito=`Empleado con id ${this.trabajador.id} Actualizado!!!!`;

      setTimeout( () => {
        this.mensajeExito="";
      },3000);

}

asignarFotoAleatoria(){
  let genero;
  const id = Math.floor(Math.random() * 100);
  if (this.esFemenino){
    genero = 'women';

  }else{
    genero = 'men';
  }
  this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
}

}
