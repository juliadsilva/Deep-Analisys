import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DadosComponent } from './dados/dados.component';
import { NovaPartidaComponent } from './nova-partida/nova-partida.component';

import {BaralhoService} from './service/baralho.service';
import { ModalNovoBaralhoComponent } from './modal-novo-baralho/modal-novo-baralho.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    TimeComponent,
    BaralhoComponent,
    DadosComponent,
    NovaPartidaComponent,
    ModalNovoBaralhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    BaralhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
