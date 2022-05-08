import { Router } from '@angular/router';
import { ReservaService } from './../../shared/service/reserva.service';
import { Reserva } from 'src/app/shared/model/reserva';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela-reserva',
  templateUrl: './tabela-reserva.component.html',
  styleUrls: ['./tabela-reserva.component.scss']
})
export class TabelaReservaComponent implements OnInit {

  reservas!: MatTableDataSource<Reserva>;
  colunas = ['id','nome','cpf','mesa','horario','data','acoes']

  constructor(private reservaService:ReservaService, private roteador:Router) {     
  }

  ngOnInit(): void {  
    this.reservaService.listar().subscribe(
      reservas => this.reservas = new MatTableDataSource<Reserva>(reservas)
    )
  } 

  filtrar(value:string): void{
    this.reservas.filter = value.trim().toLowerCase()
  }

  apagar(id:number):void{
    this.reservaService.remover(id).subscribe(
      apagado =>{
        const idReserva = this.reservas.data.findIndex(reserva => reserva.id === id)
        if(idReserva > -1){
          this.reservas.data.splice(idReserva,1)
          this.reservas = new MatTableDataSource(this.reservas.data)
        }
      }
    )
  }

  editar(reserva:Reserva){
    this.roteador.navigate(['cadastrarreserva',reserva.id])
  }

}
