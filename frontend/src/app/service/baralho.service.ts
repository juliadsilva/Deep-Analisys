import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  constructor(private http:HttpClient) { }

  adicionar(new_baralho: any){
    let url = `http://localhost:8080/baralho`;
    return this.http.post<any[]>(url,new_baralho); 
  }

  deletar(nome:string, idUsuario:number){
    let url = `http://localhost:8080/baralho/${idUsuario}/${nome}`;
    return this.http.delete<any>(url);
  }

  editar(idBaralho:number, up_baralho: any) {
    let url = `http://localhost:8080/baralho/${idBaralho}`;
    return this.http.put<any[]>(url, up_baralho);   
  }

  procurar(nome: string, idUsuario:number){
    let url = `http://localhost:8080/baralho/${idUsuario}/${nome}`;
    return this.http.get<object>(url);
  }
  
  listarIdUser(id: number){
    let url = `http://localhost:8080/baralho/idUsuario/${id}`;
    return this.http.get<any[]>(url);
  }

  detalhes(id: number){
    let url = `http://localhost:8080/baralho/${id}`;
    return this.http.get<object>(url);
  }
}
