import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ng2-modal';

//TOASTR
import { ToastrModule } from 'ngx-toastr';
import  {  BrowserAnimationsModule  }  from  '@angular/platform-browser/animations' ;

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
import { ModalAdicionarPartidaComponent } from './modal-adicionar-partida/modal-adicionar-partida.component';
import { ModalDeletarBaralhoComponent } from './modal-deletar-baralho/modal-deletar-baralho.component';
import { ModalEditarBaralhoComponent } from './modal-editar-baralho/modal-editar-baralho.component';
import { ModalDeletarPartidaComponent } from './modal-deletar-partida/modal-deletar-partida.component';
import { ModalInfoFormatosComponent } from './modal-info-formatos/modal-info-formatos.component';

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
    ModalAdicionarPartidaComponent,
    ModalDeletarBaralhoComponent,
    ModalEditarBaralhoComponent,
    ModalDeletarPartidaComponent,
    ModalInfoFormatosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    BaralhoService,
    PartidasService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
