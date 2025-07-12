import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
    {path: 'listar', component: ListaComponent},
    {path: 'agregar', component: AgregarComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: 'actualizar', component: ActualizarComponent},
    {path: 'editar/:id', component: EditarComponent},
    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
];