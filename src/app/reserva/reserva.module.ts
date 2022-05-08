import { PipesModule } from './../shared/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { CadastrarReservaComponent } from './cadastrar-reserva/cadastrar-reserva.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import {FlexAlignDirective, FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { TabelaReservaComponent } from './tabela-reserva/tabela-reserva.component'



@NgModule({
  declarations: [
    ListarReservaComponent,
    CadastrarReservaComponent,
    TabelaReservaComponent,
    
  ]
  ,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    // FlexAlignDirective,
    FlexModule,
    MatTableModule,
    PipesModule,
  ],
  exports:[
    ListarReservaComponent,
    CadastrarReservaComponent
  ]
})
export class ReservaModule { }
