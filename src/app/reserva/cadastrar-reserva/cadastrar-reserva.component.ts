import { ReservaFirestoreService } from './../../shared/service/reserva-firestore.service';
import { MensagemService } from './../../shared/service/mensagem.service';
import { ReservaService } from './../../shared/service/reserva.service';
import { reservas } from '../../shared/model/reservas';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../shared/model/reserva';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Component({
  selector: 'app-cadastrar-reserva',
  templateUrl: './cadastrar-reserva.component.html',
  styleUrls: ['./cadastrar-reserva.component.scss']
})
export class CadastrarReservaComponent implements OnInit {
  reserva:Reserva;
  reservas = reservas;

  operacaoCadastro = true

  constructor(
    private reservaService:ReservaFirestoreService, 
    private rotaAtual: ActivatedRoute, 
    private roteador: Router,
    private mensagemService:MensagemService,
    ){ 
      this.reserva = new Reserva();
      if(this.rotaAtual.snapshot.paramMap.has('id')){
        this.operacaoCadastro = false;
        const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
        this.reservaService.pesquisarPorId(idParaEdicao).subscribe(
          resultado => this.reserva = resultado
        );
      }
  }
  ngOnInit(): void {
  }
  marcarReserva(){
    if(this.reserva.id){

      this.reservaService.atualizar(this.reserva).subscribe(
        reserva => {
          this.mensagemService.success('Reservada atualizada com sucesso!')
          console.log('Usuario atualizado!!')
          this.roteador.navigate(['listarreservas'])
        }
      )

    }else{
      this.reservaService.cadastrar(this.reserva).subscribe(
        reserva => {
          console.log(`Reserva de ${reserva} realizada com sucesso!`)
         this.mensagemService.success('Mesa reservada com sucesso!')
          this.roteador.navigate(['listarreservas'])
        }
      )
    }
  }

}
