import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cliente';

  constructor(private router : Router)
  {

  }
  listar()
  {
    this.router.navigate(['listar']);
  }
  guardar()
  {
    this.router.navigate(['guardar']);
  }
  buscar()
  {
    this.router.navigate(['buscar']);
  }
  editar()
  {
    this.router.navigate(['editar']);
  }
  eliminar()
  {
    this.router.navigate(['eliminar']);
  }
  pagar()
  {
    this.router.navigate(['pagar']);
  }
}
