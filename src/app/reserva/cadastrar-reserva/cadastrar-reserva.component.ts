import { reservas } from '../../shared/model/reservas';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../shared/model/reserva';

@Component({
  selector: 'app-cadastrar-reserva',
  templateUrl: './cadastrar-reserva.component.html',
  styleUrls: ['./cadastrar-reserva.component.scss']
})
export class CadastrarReservaComponent implements OnInit {
  reserva:Reserva;
  reservas = reservas;

  constructor() { 
    this.reserva = new Reserva();
  }

  ngOnInit(): void {
  }

  marcarReserva():void{
    if (this.reserva.nome){
      if(Number(this.reserva.mesa)<10){
        this.reserva.mesa = '0' + this.reserva.mesa
      }
      this.reservas.push(this.reserva);
      this.reserva = new Reserva();

    }
    console.log(this.reservas)
  }

}
