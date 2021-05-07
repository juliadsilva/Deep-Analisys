import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void { }

  login(form: any[]) {
    this.usuarioService.login(form);
  }
}
