import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  cadastrar(form: any) {
    let email = form.email;
    let username = form.username;

    this.emailNaoExiste(email);
    this.usernameNaoExiste(username);

    let estado = form.estado;
    let cidade = form.cidade;
    let senha = form.senha;
    let pre_token = username + senha;
    let token = Md5.hashStr(pre_token).toString();

    let new_user = {
      username: username,
      email: email,
      estado: estado,
      cidade: cidade,
      token: token
    };

    this.usuarioService.cadastrar(new_user).subscribe(res => {
      if (res.length != 0) {
        this.toastr.success('Seja bem vindo ao Deep Analisys!', 'Parabéns!', { timeOut: 5000 });
        this.router.navigate([`/`]);
      } else
        this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
    });
  }


  emailNaoExiste(email: string): boolean {
    this.usuarioService.emailNaoExiste(email).subscribe(res => {
      if (res.length != 0) {
        this.toastr.error('E-mail já existe. Faça o login!', 'Ops!', { timeOut: 5000 });
        this.router.navigate([`/cadastrar`]);
      }
    });
    return false;
  }

  usernameNaoExiste(username: string): boolean {
    this.usuarioService.usernameNaoExiste(username).subscribe(res => {
      if (res.length != 0) {
        localStorage.setItem("user", JSON.stringify(res[0]));
        this.toastr.error('Usermane já existe. Tente outro!', 'Ops!', { timeOut: 5000 });
        this.router.navigate([`/cadastrar`]);
      }
    });
    return false;
  }

  isButtonDisabled(form: any, senha: string, resenha: string) {
    return (!form.valid || senha !== resenha);
  }
}
