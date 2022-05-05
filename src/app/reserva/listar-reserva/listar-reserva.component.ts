import { reservas } from '../../shared/model/reservas';
// import { Reserva } from 'src/app/shared/model/reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.scss']
})
export class ListarReservaComponent implements OnInit {

  reservas = reservas;

  // usuario: Usuario;
  // usuarios: Array<Usuario>;

  constructor() { 
    // this.usuario = new Usuario()
    // this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {}

  
}
