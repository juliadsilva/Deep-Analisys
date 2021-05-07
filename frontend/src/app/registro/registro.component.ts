import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios: any[] = [];

  closeResult: string = '';

  constructor(private http:HttpClient, private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  addUsuario(form: any) {
    let newUsuario = form;
    newUsuario.id = this.usuarioService.getUsuarios().length + 1;
    this.usuarioService.addUsuario(newUsuario);
  }
}
