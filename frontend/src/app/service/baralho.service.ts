import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {


  constructor(private http:HttpClient, private toastr: ToastrService) { }

  listar(id: number){
    let url = `http://localhost:8080/idUsuario/{&id}`;
    return this.http.get<any[]>(url);
  }

  adicionar(form: any, id: number){
    let nome = form.nome;
    let cor = form.cor;
    let idUsuario = id;
      
    let new_deck = {
      nome: nome,
      cor: cor,
      idUsuario: idUsuario      
    };

    this.http.post<any[]>("http://localhost:8080/baralho",new_deck);
    this.toastr.success('Baralho criado!','Sucesso!',{timeOut:5000});     
  }

  deletar(nome: string){
    //let url = `http://localhost:8080/baralho/check/{$nome}`;
    let url = `http://localhost:8080/baralho/{$id}`;
    return this.http.delete<any[]>(url);
  }

  editar(form: any, id: number) {
    let nome = form.nome;
    let cor = form.cor;
    let idBaralho = id;
      
    let up_deck = {
      nome: nome,
      cor: cor,
      idBaralho: idBaralho 
    };

    this.http.put<any[]>("http://localhost:8080/baralho/{$id}",up_deck);
    this.toastr.success('Baralho criado!','Sucesso!',{timeOut:5000});
  }
}
