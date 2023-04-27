import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entidad/Cliente';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit
{
  constructor(private router : Router, private service : ServiceService){}
  ngOnInit(): void
  {
  }
  cliente : Cliente = new Cliente();

  guardar()
  {
    if(this.cliente.edad > 29 && this.cliente.edad < 41)
    {
        this.service.guardar(this.cliente).subscribe(data=>{
        this.router.navigate(['listar']);
      });
    }
    else
    {
      alert("La edad debe ser mayor a 29 y menor a 41.")
    }

  }
}
