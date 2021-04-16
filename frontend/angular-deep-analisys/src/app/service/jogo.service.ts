import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  // Simulação do banco de dados jogo
  jogos: any[] = [
    {
      'id': 1,
      'idBaralho': 1,
      'win': 2,
      'loss': 1
    },
    {
      'id': 2,
      'idBaralho': 1,
      'win': 3,
      'loss': 0
    },
    {
      'id': 3,
      'idBaralho': 1,
      'win': 1,
      'loss': 2
    },
    {
      'id': 4,
      'idBaralho': 2,
      'win': 3,
      'loss': 0
    },
    {
      'id': 5,
      'idBaralho': 2,
      'win': 2,
      'loss': 1
    },
    {
      'id': 6,
      'idBaralho': 2,
      'win': 2,
      'loss': 1
    },

  ]

  constructor() { }

  getjogos(): any[] {
    return this.jogos;
  }

  getjogosbyId(id: number) {
    return this.jogos.filter(p => p.idBaralho == id);
  }

  addjogo(jogo: any) {
    this.jogos.push(jogo);
  }
}
