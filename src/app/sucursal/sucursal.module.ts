import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalRoutingModule } from './sucursal-routing.module';

import { ListaSucursalComponent } from '../Components/lista-sucursal/lista-sucursal.component';
import { AddSucursalComponent } from '../Components/add-sucursal/add-sucursal.component';
import { EditarSucursalComponent } from '../Components/editar-sucursal/editar-sucursal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListaSucursalComponent,
    AddSucursalComponent,
    EditarSucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SucursalModule { }
