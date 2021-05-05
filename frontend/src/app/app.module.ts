import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Service
import { BaralhoService } from './service/baralho.service';
import { PartidasService } from './service/partidas.service';
import { UsuarioService } from './service/usuario.service';

// Componente
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { DadosComponent } from './dados/dados.component';


// Modal
import { ModalAdicionarBaralhoComponent } from './modal-adicionar-baralho/modal-adicionar-baralho.component';
import { ModalNovaPartidaComponent } from './modal-nova-partida/modal-nova-partida.component';
import { ModalDeletarBaralhoComponent } from './modal-deletar-baralho/modal-deletar-baralho.component';
import { ModalEditarBaralhoComponent } from './modal-editar-baralho/modal-editar-baralho.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    TimeComponent,
    BaralhoComponent,
    DadosComponent,
    ModalAdicionarBaralhoComponent,
    ModalNovaPartidaComponent,
    ModalDeletarBaralhoComponent,
    ModalEditarBaralhoComponent
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
