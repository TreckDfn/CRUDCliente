import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entidad/Cliente';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit
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
  editar()
  {
    console.log(JSON.stringify(this.cliente));
    this.service.editar(this.cliente).subscribe(data=>{
      this.router.navigate(['listar'])
    });
  }
}
