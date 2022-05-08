import { TabelaReservaComponent } from './reserva/tabela-reserva/tabela-reserva.component';
import { ListarReservaComponent } from './reserva/listar-reserva/listar-reserva.component';
import { CadastrarReservaComponent } from './reserva/cadastrar-reserva/cadastrar-reserva.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:ListarReservaComponent
  },
  {
    path:'cadastrarreserva',
    component: CadastrarReservaComponent
  },
  {
    path:'cadastrarreserva/:id',
    component: CadastrarReservaComponent
  },
  {
    path:'listarreservas',
    component: ListarReservaComponent
  },
  {
    path:'listarreservastabela',
    component: TabelaReservaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
