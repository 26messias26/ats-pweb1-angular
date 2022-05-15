import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reserva } from './../model/reserva';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaFirestoreService {

  colecaoReservas: AngularFirestoreCollection<Reserva>
  NOME_COLECAO = 'reserva'

  constructor( private AFireStore: AngularFirestore) {
    this.colecaoReservas = AFireStore.collection(this.NOME_COLECAO);
   }

  cadastrar(reserva:Reserva):Observable<object>{
    delete reserva.id;
    return from(this.colecaoReservas.add(Object.assign({},reserva)));
  }

  listar():Observable<Reserva[]>{
    return this.colecaoReservas.valueChanges({idField:'id'})
  }

  pesquisarPorId(id: string | ''): Observable<Reserva> {
    return this.colecaoReservas.doc(id).get().pipe(map(document => new Reserva(document.id, document.data())));
  }

  remover(id:string | ''):Observable<void>{
    return from(this.colecaoReservas.doc(id).delete())
  }

  atualizar(reserva:Reserva): Observable<void>{ 
    return from(this.colecaoReservas.doc(reserva.id).update(Object.assign({},reserva)))
  }
}
