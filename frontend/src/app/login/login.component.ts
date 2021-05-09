import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService, private toastr: ToastrService ) { }

  ngOnInit(): void {}

  login(form: any){
    let username = form.username;
    let senha = form.senha; 
    let pre_token = username+senha;
    let token = Md5.hashStr(pre_token).toString();
 
    this.usuarioService.login(token).subscribe(res=>{
      if(res != null){
        let id_logado = Object.values(res)[0];
        this.toastr.success('Login efetuado com sucesso!','Sucesso!',{timeOut:2000});
        this.router.navigate([`/baralho/${id_logado}`]);
      }else{
        this.toastr.error('Verifique seu usuário e senha!','Usuario não encontrado!',{timeOut:2000});
      }
    });
  }
}

