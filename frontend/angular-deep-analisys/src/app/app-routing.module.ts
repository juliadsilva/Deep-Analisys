import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { DadosComponent} from './dados/dados.component';
import { NovaPartidaComponent} from './nova-partida/nova-partida.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path:"equipe", component: TimeComponent},
  {path:"baralho", component: BaralhoComponent},
  {path:"dados", component: DadosComponent},
  {path:"partida", component: NovaPartidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
