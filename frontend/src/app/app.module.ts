import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { DadosComponent } from './dados/dados.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BaralhoService } from './service/baralho.service';
import { PartidasService } from './service/partidas.service';
import { UsuarioService } from './service/usuario.service';
import { ModalNovoBaralhoComponent } from './modal-novo-baralho/modal-novo-baralho.component';
import { ModalNovaPartidaComponent } from './modal-nova-partida/modal-nova-partida.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    TimeComponent,
    BaralhoComponent,
    DadosComponent,
    ModalNovoBaralhoComponent,
    ModalNovaPartidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    BaralhoService,
    PartidasService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
