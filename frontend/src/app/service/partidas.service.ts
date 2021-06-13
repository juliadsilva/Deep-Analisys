import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private http:HttpClient) { }

  adicionar(new_partida: any) : Observable<any>{
    let url = `http://localhost:8080/partida`;
    return this.http.post<any[]>(url,new_partida); 
  }

  procurar(ident: any, idBaralho:any) : Observable<object>{
    let url = `http://localhost:8080/partida/${idBaralho}/${ident}`;
    return this.http.get<object>(url);
  }

  deletar(id: any) : Observable<any> {
    let url = `http://localhost:8080/partida/${id}`;
    return this.http.delete<any>(url);
  }

  async listarIdBaralho(id: any): Promise<Observable<any>>{
    let url = `http://localhost:8080/partida/idBaralho/${id}`;
    await  this.sleep(2000)
    return this.http.get<any[]>(url)
  }

  sleep(ms:number) {
      return new Promise(
        resolve => setTimeout(resolve, ms)
      );
  }

}
