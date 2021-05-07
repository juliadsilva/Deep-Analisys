import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

    // Simulação do banco de dados partidas
    partidas: any[] = [
      {
        'id': 1,
        'idBaralho': 1,
        'win': 2,
        'loss': 1
      },
      {
        'id': 2,
        'idBaralho': 1,
        'win': 2,
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
        'win': 0,
        'loss': 2
      },
      {
        'id': 5,
        'idBaralho': 2,
        'win': 2,
        'loss': 1
      },
      {
        'id': 6,
        'idBaralho': 3,
        'win': 2,
        'loss': 1
      },
    ]
  constructor() {}

  getpartidas(): any[] {
    return this.partidas;
  }

  getpartidasbyId(id: number) {
    return this.partidas.filter(p => p.idBaralho == id);
  }

  addpartida(partida: any) {
    this.partidas.push(partida);
  }

  delPartida(partida: any) {
    let index = this.partidas.indexOf(partida);
    this.partidas.splice(index, 1)
  }
}
