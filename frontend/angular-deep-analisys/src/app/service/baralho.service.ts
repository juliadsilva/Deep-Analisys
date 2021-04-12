import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  // Simulação do banco de dados com um vetor de baralho
  baralhos = [
    {
      'id': 1,
      'usuario': 'Joaquin',
      'cor': 'Vermelho',
      'win': 5,
      'loss': 5
    },
    {
      'id': 2,
      'usuario': 'Pedro',
      'cor': 'Preto',
      'win': 3,
      'loss': 7
    },
    {
      'id': 3,
      'usuario': 'Matheus',
      'cor': 'Azul',
      'win': 8,
      'loss': 2
    },
    {
      'id': 4,
      'usuario': 'Joana',
      'cor': 'Branco',
      'win': 6,
      'loss': 4
    },
    {
      'id': 5,
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
