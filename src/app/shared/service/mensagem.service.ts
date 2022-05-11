import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar:MatSnackBar) { }

  success(mensagem:string):void{
    this.abrirSnackBar(mensagem,['success'])
  }

  
  info(mensagem:string):void{
    this.abrirSnackBar(mensagem,['info'])
  }

  
  warning(mensagem:string):void{
    this.abrirSnackBar(mensagem,['warning'])
  }

  
  error(mensagem:string):void{
    this.abrirSnackBar(mensagem,['error'])
  }

  private abrirSnackBar(mensagem:string,classExtras:string[]):void{
    const snackConfig = new MatSnackBarConfig();
    snackConfig.politeness = 'assertive';
    snackConfig.duration = 5000;
    snackConfig.panelClass = classExtras;

    this.snackBar.open('Resevado com sucesso!','x', snackConfig)

  }
}
