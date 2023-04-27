import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../Entidad/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8040/api/Cliente/";

  listar()
  {
    return this.http.get<Cliente[]> (this.url + 'listar');
  }
  guardar(cliente : Cliente)
  {
    return this.http.post<Cliente> (this.url+ 'guardar', cliente);
  }
  buscar(cliente : Cliente)
  {
    return this.http.post<Cliente> (this.url+ 'buscar', cliente);
  }
  editar(cliente : Cliente)
  {
    return this.http.post<Cliente> (this.url+ 'editar', cliente);
  }
  eliminar(cliente : Cliente)
  {
    return this.http.post<Cliente> (this.url+ 'eliminar', cliente);
  }
  pagar(cliente : Cliente)
  {
    return this.http.post<Cliente> (this.url+ 'pagar', cliente);
  }
}
