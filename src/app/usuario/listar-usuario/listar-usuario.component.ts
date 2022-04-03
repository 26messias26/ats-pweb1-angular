import { USUARIOS } from './../../shared/model/usuarios';
// import { Usuario } from 'src/app/shared/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios = USUARIOS;

  // usuario: Usuario;
  // usuarios: Array<Usuario>;

  constructor() { 
    // this.usuario = new Usuario()
    // this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {}

  
}
