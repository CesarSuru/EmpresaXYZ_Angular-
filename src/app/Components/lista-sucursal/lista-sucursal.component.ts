import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { Sucursal } from 'src/app/interface/sucursal';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
  styleUrls: ['./lista-sucursal.component.css']
})
export class ListaSucursalComponent implements OnInit {
  sucursales: Sucursal[] = [];
  //constructor() { }

  constructor(public sucursalService: SucursalService ) {}

  ngOnInit(): void {
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{this.sucursales = data;
      console.log(this.sucursales);
      })
  }

  deleteSucursal(id: any){
    this.sucursalService.delete(id).subscribe(res => { this.sucursales = this.sucursales.filter(item => item.id !== id);
      console.log('Sucursales Eliminado');
     })
  }

}
