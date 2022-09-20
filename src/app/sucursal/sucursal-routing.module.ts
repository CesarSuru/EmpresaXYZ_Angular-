import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSucursalComponent } from '../Components/add-sucursal/add-sucursal.component';
import { EditarSucursalComponent } from '../Components/editar-sucursal/editar-sucursal.component';
import { ListaSucursalComponent } from '../Components/lista-sucursal/lista-sucursal.component';

const routes: Routes = [
  { path: 'sucursal', redirectTo: 'Compoenents/lista-sucursal', pathMatch: 'full'},
  { path: 'Components/lista-sucursal', component: ListaSucursalComponent },
  { path: 'Components/add-sucursal', component: AddSucursalComponent },
  { path: 'Components/editar-sucursal/:id', component: EditarSucursalComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
