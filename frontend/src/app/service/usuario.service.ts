import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  cadastrar(new_user: any){
    let url = `http://localhost:8080/usuario`;
    return this.http.post<any[]>(url,new_user);
  }

  login(token: string){
    let url = `http://localhost:8080/usuario/login/${token}`;
    return this.http.get<object>(url);
  }

  detalhes(id: number){
    let url = `http://localhost:8080/usuario/${id}`;
    return this.http.get<object>(url);
  }

  emailNaoExiste(email: string){
    let url = `http://localhost:8080/usuario/check/email/${email}`;
    return this.http.get<object>(url);
  } 

  usernameNaoExiste(username: string){
    let url = `http://localhost:8080/usuario/check/username/${username}`;
    return this.http.get<object>(url);
  } 
}
