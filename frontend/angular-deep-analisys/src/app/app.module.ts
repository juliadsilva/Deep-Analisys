import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { DadosComponent } from './dados/dados.component';

import { BaralhoService } from './service/baralho.service';
import { JogoService } from './service/jogo.service';
import { UsuarioService } from './service/usuario.service';
import { ModalNovoBaralhoComponent } from './modal-novo-baralho/modal-novo-baralho.component';
import { ModalNovoJogoComponent } from './modal-novo-jogo/modal-novo-jogo.component';

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
    ModalNovoJogoComponent
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
    JogoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
