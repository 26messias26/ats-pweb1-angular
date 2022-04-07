import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from './layout/layout.module';
import { UsuarioModule } from './usuario/usuario.module';
// import { MenuComponent } from './layout/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatIconModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
