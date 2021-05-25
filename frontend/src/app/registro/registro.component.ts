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

  existeEmail: any;
  existeUsername: any;

  constructor(private router: Router, private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  cadastrar(form: any) {
    let email = form.email;
    let username = form.username;

    this.usuarioService.usernameNaoExiste(username).subscribe(res => {
      if (res != null) {
        this.toastr.error('Usermane já existe. Tente outro!', 'Ops!', { timeOut: 5000 });
      }
      else {
        this.usuarioService.emailNaoExiste(email).subscribe(res => {
          if (res != null) {
            this.toastr.error('E-mail já existe. Faça o login!', 'Ops!', { timeOut: 5000 });
          }
          else {
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
                console.log('Registro - sucesso');
                this.router.navigate([`/`]);
              } else
                this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
                console.log('Registro - erro');
              });
          }
        });
      }
    });
  }

  isButtonDisabled(form: any, senha: string, resenha: string) {
    return (!form.valid || senha !== resenha);
  }
}
