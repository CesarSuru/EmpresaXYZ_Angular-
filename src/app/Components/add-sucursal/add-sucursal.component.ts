import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})
export class AddSucursalComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public sucursalService: SucursalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom_sucursal: new FormControl('', [Validators.required]),
      nom_admin: new FormControl('', [Validators.required]),
      tel: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      direccion: new FormControl('', [Validators.required]),
      fax: new FormControl(),
      pedidos_mes: new FormControl('', [ Validators.pattern("^[0-9]*$") ])
    })
  }

  get f(){
    return this.form.controls;
  }

  get tel() { return this.form.get('tel'); }

  get pedidos_mes() { return this.form.get('pedidos_mes'); }


  submit(){
    console.log(this.form.value);
    this.sucursalService.create(this.form.value).subscribe(res => {
      console.log('Sucursal Creada');
      this.router.navigateByUrl('Components/lista-sucursal');
    })
  }

}
