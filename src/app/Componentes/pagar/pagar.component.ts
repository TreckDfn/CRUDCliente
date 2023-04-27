import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entidad/Cliente';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit
{
  constructor(private router : Router, private service : ServiceService){}
  ngOnInit(): void
  {
    this.buscar();
  }
  cliente : Cliente = new Cliente();
  pago!: number;
  buscar()
  {
    this.cliente.idCliente = Number(localStorage.getItem("id"));
    console.log(JSON.stringify(this.cliente));
    this.service.buscar(this.cliente).subscribe(data=>{
      this.cliente = data;
    });
  }
  pagar()
  {
    this.cliente.abono  = this.cliente.abono + this.pago;
    console.log(JSON.stringify(this.cliente));
    this.service.pagar(this.cliente).subscribe(data=>{
      this.router.navigate(['listar'])
    });
  }
}
