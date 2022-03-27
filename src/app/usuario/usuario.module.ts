import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';



@NgModule({
  declarations: [
    ListarUsuarioComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
