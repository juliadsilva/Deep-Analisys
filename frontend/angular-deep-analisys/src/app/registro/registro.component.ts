import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios:any[] = [];

  constructor(private  usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  addUsuario(form:any){
    let newUsuario = form;
    newUsuario.id = this.usuarioService.getUsuarios.length + 1;
    this.usuarioService.addUsuario(newUsuario);
  }

}
