import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  // Simulação do banco de dados com um vetor de baralho
  baralhos = [
    {
      'id': 1,
      'idUser': 1,
      'nome': 'Bant',
      'cor': 'Branco'
    },
    {
      'id': 2,
      'idUser': 1,
      'nome': 'Esper',
      'cor': 'Azul'
    },
    {
      'id': 3,
      'idUser': 1,
      'nome': 'Grixis',
      'cor': 'Preto'
    },
    {
      'id': 4,
      'idUser': 1,
      'nome': 'Jundin',
      'cor': 'Branco'
    },
    {
      'id': 5,
      'idUser': 1,
      'usuario': 'ADM',
      'nome': 'Naya',
      'cor': 'Verde'
    },
    {
      'id': 6,
      'idUser': 2,
      'nome': 'Naya',
      'cor': 'Verde'
    },
    {
      'id': 7,
      'idUser': 2,
      'nome': 'Jundin',
      'cor': 'Verde'
    },
    {
      'id': 8,
      'idUser': 2,
      'nome': 'Esper',
      'cor': 'Verde'
    }
  ]

  constructor() { }

  getBaralhos(): any[] {
    return this.baralhos;
  }

  getBaralhosById(id: number) {
    return this.baralhos.filter(b => b.idUser == id);
  }

  addBaralho(baralho: any) {
    this.baralhos.push(baralho);
  }

}
