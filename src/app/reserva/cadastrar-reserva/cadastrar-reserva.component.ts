import { ReservaService } from './../../shared/service/reserva.service';
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

  constructor(private reservaService:ReservaService) { 
    this.reserva = new Reserva();
  }

  ngOnInit(): void {
  }

  marcarReserva(){
    this.reservaService.cadastrar(this.reserva).subscribe(
      reserva => console.log(reserva)
    )
  }

}
