import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  // Simulação do banco de dados partida
  partidas = [
    {
      'id': 1,
      'idBaralho': '1',
      'win': 2,
      'loss': 1
    },
    {
      'id': 2,
      'idBaralho': '1',
      'win': 3,
      'loss': 0
    },
    {
      'id': 3,
      'idBaralho': '1',
      'win': 1,
      'loss': 2
    },
    {
      'id': 4,
      'idBaralho': '2',
      'win': 3,
      'loss': 0
    },
    {
      'id': 5,
      'idBaralho': '2',
      'win': 2,
      'loss': 1
    },
    {
      'id': 5,
      'idBaralho': '2',
      'win': 2,
      'loss': 1
    },
    
  ]

  constructor() {}

  getPartidas():any[]{
    return this.partidas;
  }

  getPartidasbyId(id:number){
    let partida = this.partidas.find(p => p.id = id);
    if (!partida) return null;
    else return partida;
  }

  addPartida(partida:any){
    this.partidas.push(partida);
  }

}
