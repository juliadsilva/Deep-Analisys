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
      'cor': 'Branco',
      'win': 5,
      'loss': 5
    },
    {
      'id': 2,
      'nome' : 'Esper',
      'usuario': 'Pedro',
      'cor': 'Azul',
      'win': 3,
      'loss': 7
    },
    {
      'id': 3,
      'nome' : 'Grixis',
      'usuario': 'Matheus',
      'cor': 'Preto',
      'win': 8,
      'loss': 2
    },
    {
      'id': 4,
      'nome' : 'Jundin',
      'usuario': 'Joana',
      'cor': 'Branco',
      'win': 6,
      'loss': 4
    },
    {
      'id': 5,
      'nome' : 'Naya',
      'usuario': 'Josefina',
      'cor': 'Verde',
      'win': 4,
      'loss': 6
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
