import { ReservaService } from './../../shared/service/reserva.service';
import { Reserva } from 'src/app/shared/model/reserva';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.scss']
})
export class ListarReservaComponent implements OnInit {

  reservas: Array<Reserva>

  constructor(private reservaService:ReservaService, private roteador: Router) { 
    this.reservas = new Array<Reserva>()
  }

  ngOnInit(): void {
    this.reservaService.listar().subscribe(
      reservas => this.reservas = reservas
    )
  }

  editar(reserva:Reserva):void{
    this.roteador.navigate(['cadastrarreserva',reserva.id])
  }

  cancelar(reserva:Reserva){
    this.reservaService.remover(reserva.id).subscribe(
      restposta => {
        const idReserva = this.reservas.findIndex(reservaR => reservaR.cpf === reserva.cpf);
        if(idReserva > -1){
          this.reservas.splice(idReserva,1)
        }
      }
    );
  }

  
}
