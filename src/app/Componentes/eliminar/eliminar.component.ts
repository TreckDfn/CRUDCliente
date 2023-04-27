import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entidad/Cliente';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit
{
  constructor(private router : Router, private service : ServiceService){}
  ngOnInit(): void
  {
    this.buscar();
  }
  cliente : Cliente = new Cliente();
  buscar()
  {
    this.cliente.idCliente = Number(localStorage.getItem("id"));
    console.log(JSON.stringify(this.cliente));
    this.service.buscar(this.cliente).subscribe(data=>{
      this.cliente = data;
    });
  }
  eliminar()
  {
    console.log(JSON.stringify(this.cliente));
    this.service.eliminar(this.cliente).subscribe(data=>{
      this.router.navigate(['listar'])
    });
  }
}
