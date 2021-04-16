import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  // Simulação do banco de dados com um vetor de baralho
  baralhos = [
    {
      'id': 1,
      'nome' : 'Bant',
      'usuario': 'Joaquin',
      'cor': 'Branco'
    },
    {
      'id': 2,
      'nome' : 'Esper',
      'usuario': 'Pedro',
      'cor': 'Azul'
    },
    {
      'id': 3,
      'nome' : 'Grixis',
      'usuario': 'Matheus',
      'cor': 'Preto'
    },
    {
      'id': 4,
      'nome' : 'Jundin',
      'usuario': 'Joana',
      'cor': 'Branco'
    },
    {
      'id': 5,
      'nome' : 'Naya',
      'usuario': 'Josefina',
      'cor': 'Verde'
    }
  ]

  constructor() { }

  getBaralhos():any[]{
    return this.baralhos;
  }

  getBaralhosById(id:number){
    let baralho = this.baralhos.find(b => b.id = id);
    if (!baralho) return null;
    else return baralho;   
  }

  addBaralho(baralho:any){
    this.baralhos.push(baralho);
  }

}
