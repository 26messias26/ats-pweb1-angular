import { CpfPipe } from './cpf.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CpfPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CpfPipe
  ]
})
export class PipesModule { }
