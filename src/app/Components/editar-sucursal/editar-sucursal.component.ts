import { Component, OnInit } from '@angular/core';

import { SucursalService } from 'src/app/services/sucursal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Sucursal } from 'src/app/interface/sucursal';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
  
  id?: number;
  sucursal!: Sucursal;
  form!: FormGroup;


  constructor(

    public sucursalService: SucursalService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.sucursalService.find(this.id).subscribe((data:Sucursal)=>{
        this.sucursal = data;
      });

      this.form = new FormGroup({
        nom_sucursal: new FormControl('', [Validators.required]),
        nom_admin: new FormControl('', [Validators.required]),
        tel: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
        direccion: new FormControl('', [Validators.required]),
        fax: new FormControl(),
        pedidos_mes: new FormControl('', [ Validators.pattern("^[0-9]*$") ])
      });
  }

  get f() {
    return this.form.controls;
  }

  get tel() { return this.form.get('tel'); }

  get pedidos_mes() { return this.form.get('pedidos_mes'); }

  submit(){
    console.log(this.form.value);
    this.sucursalService.update(this.id, this.form.value).subscribe(res => {
      console.log('Sucursal Actualizada');
      this.router.navigateByUrl('Components/lista-sucursal');
    })
  }

}
