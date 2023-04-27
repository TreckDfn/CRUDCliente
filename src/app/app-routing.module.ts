import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { BuscarComponent } from './Componentes/buscar/buscar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { PagarComponent } from './Componentes/pagar/pagar.component';

const routes: Routes = [
  {path : 'listar', component : ListarComponent},
  {path : 'guardar', component : GuardarComponent},
  {path : 'buscar', component : BuscarComponent},
  {path : 'editar', component : EditarComponent},
  {path : 'eliminar', component : EliminarComponent},
  {path : 'pagar', component : PagarComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
