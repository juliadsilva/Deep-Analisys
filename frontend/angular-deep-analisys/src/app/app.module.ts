import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { DadosComponent } from './dados/dados.component';

import { BaralhoService } from './service/baralho.service';
import { PartidaService } from './service/partida.service';
import { ModalNovoBaralhoComponent } from './modal-novo-baralho/modal-novo-baralho.component';
import { ModalNovaPartidaComponent } from './modal-nova-partida/modal-nova-partida.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

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
    ModalNovaPartidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    BaralhoService,
    PartidaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
