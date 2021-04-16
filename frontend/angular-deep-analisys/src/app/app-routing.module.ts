import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TimeComponent } from './time/time.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { DadosComponent} from './dados/dados.component';


const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path:"equipe", component: TimeComponent},
  {path:"baralho/:id", component: BaralhoComponent},
  {path:"dados/:id", component: DadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
