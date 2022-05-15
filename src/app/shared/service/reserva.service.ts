import { Reserva } from 'src/app/shared/model/reserva';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  

  url = 'http://localhost:3000/reserva'

  constructor(private httpClient: HttpClient) { }

  cadastrar(reserva:Reserva):Observable<Reserva>{
    return this.httpClient.post<Reserva>(this.url,reserva)
  }

  listar():Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(this.url)
  }

  pesquisarPorId(id: string |''): Observable<Reserva> {
    return this.httpClient.get<Reserva>(`${this.url}/${id}`)
  }

  remover(id:string |''):Observable<object>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  atualizar(reserva:Reserva): Observable<Reserva>{ 
    return this.httpClient.put<Reserva>(`${this.url}/${reserva.id}`,reserva)
  }
}
