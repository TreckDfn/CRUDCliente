import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from 'src/app/Entidad/Cliente';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  constructor(private router:Router, private service : ServiceService){}
  clientes!:Cliente[];
  cliente!:Cliente;
  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.service.listar().subscribe(data=>{
      this.clientes = data;
      console.log("Listar empresa: "+JSON.stringify(data));
    });
  }
  editar(idCliente : Number)
  {
    localStorage.setItem("id", String(idCliente));
    this.router.navigate(['editar']);

  }
  eliminar(idCliente : Number)
  {
    localStorage.setItem("id", String(idCliente));
    this.router.navigate(['eliminar']);
  }
  pagar(idCliente : Number)
  {
    localStorage.setItem("id", String(idCliente));
    this.router.navigate(['pagar']);
  }
}
