import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient, private router: Router, private toastr: ToastrService ) { }

  cadastrar(form: any){
    let email = form.email;
    let senha = form.senha;
    let username = form.username;
    let estado = form.estado;
    let cidade = form.cidade;    
    let pre_token = username+senha;
    let token = Md5.hashStr(pre_token).toString();
    
    let new_user = {
      username: username,
      estado: estado,
      cidade: cidade,
      email: email,
      token: token
    };

    this.http.post<number>("http://localhost:8080/usuario",new_user);
    this.toastr.success('Seja bem vindo ao Deep Analisys!','Parabéns!',{timeOut:5000});     
    this.router.navigate(['/']);
  }

  emailNaoExiste(form:any):boolean{
    let email = form.email;
    let url = `http://localhost:8080/usuario/check/${email}`;
    
    this.http.get<any[]>(url).subscribe(res=>{
      let number = res[0]
      console.log(number);
      console.log("TOOOOO AQUIIIII")
    });
    return false;
  } 
    
  async login(form: any){
    let username = form.username;
    let senha = form.senha;

    let pre_token = username+senha;
    let token = Md5.hashStr(pre_token).toString();

    let url = `http://localhost:8080/usuario/${token}`;

    await this.http.get<any[]>(url).subscribe(res=>{
      if( res.length !== 0 ){
        //this.is_auth = true;
        localStorage.setItem("user", JSON.stringify(res[0]));
        this.toastr.success('Login efetuado com sucesso!','Sucesso!',{
          timeOut:2000
        });
          this.router.navigate(['baralho/${user.id}']);
      }else{
        //this.is_auth = false;
        this.toastr.error('Verifique seu usuário e senha!','Usuario não encontrado!',{
          timeOut:2000
        });
      }
    });
    return this.http.get<any[]>(url);
  }
}
