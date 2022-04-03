import { USUARIOS } from './../../shared/model/usuarios';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {
  usuario:Usuario;
  usuarios = USUARIOS;

  constructor() { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  marcarReserva():void{
    if (this.usuario.nome){
      this.usuarios.push(this.usuario);
      this.usuario = new Usuario();

    }
    console.log(this.usuarios)
  }

}
