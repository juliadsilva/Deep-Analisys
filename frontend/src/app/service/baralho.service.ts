import { HttpClient } from '@angular/common/http';

export class BaralhoService {

  constructor(private http:HttpClient) { }

  adicionar(new_baralho: any){
    let url = `http://localhost:8080/baralho`;
    return this.http.post<any[]>(url,new_baralho); 
  }

  deletar(nome:string, idUsuario:any){
    let url = `http://localhost:8080/baralho/${idUsuario}/${nome}`;
    return this.http.delete<any>(url);
  }

  editar(idBaralho:any, up_baralho: any) {
    let url = `http://localhost:8080/baralho/${idBaralho}`;
    return this.http.put<any[]>(url, up_baralho);   
  }

  atualizarWinRate(idBaralho:any, wr_baralho: any) {
    let url = `http://localhost:8080/baralho/winrate/${idBaralho}`;
    return this.http.put<any[]>(url, wr_baralho);   
  }

  procurar(nome: string, idUsuario:any){
    let url = `http://localhost:8080/baralho/${idUsuario}/${nome}`;
    return this.http.get<object>(url);
  }
  
  listarIdUser(id: any){
    let url = `http://localhost:8080/baralho/idUsuario/${id}`;
    return this.http.get<any[]>(url);
  }

  detalhes(id: any){
    let url = `http://localhost:8080/baralho/${id}`;
    return this.http.get<object>(url);
  }
}
