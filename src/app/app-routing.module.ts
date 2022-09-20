import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSucursalComponent } from './Components/add-sucursal/add-sucursal.component';
import { EditarSucursalComponent } from './Components/editar-sucursal/editar-sucursal.component';
import { ListaSucursalComponent } from './Components/lista-sucursal/lista-sucursal.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
