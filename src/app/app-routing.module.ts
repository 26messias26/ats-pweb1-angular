import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cadastrarusuario',
    component: CadastrarUsuarioComponent
  },
  {
    path:'listarusuarios',
    component: ListarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
