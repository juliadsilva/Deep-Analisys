import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private http:HttpClient) { }

  adicionar(new_partida: any){
    let url = `http://localhost:8080/partida`;
    return this.http.post<any[]>(url,new_partida); 
  }

  deletar(idPartida: number){
    let url = `http://localhost:8080/partida/${idPartida}`;
    return this.http.delete<any>(url);
  }

  listarIdBaralho(id: number){
    let url = `http://localhost:8080/partida/idBaralho/${id}`;
    return this.http.get<any[]>(url);
  }
}
