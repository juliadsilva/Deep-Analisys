import { Component, OnInit } from '@angular/core';
import {BaralhoService} from '../service/baralho.service';
import { PartidaService } from '../service/partida.service';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.css']
})
export class BaralhoComponent implements OnInit {

  baralhos:any[] = [];

  closeResult: string  = '';

  constructor(private  baralhoService:BaralhoService, private partidasService:PartidaService) { }

  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.baralhos = this.baralhoService.getBaralhos();
  }

  public getWinRate(baralho:any) {
    let id = baralho.id;
    let partidas = this.partidasService.getPartidasbyId(id);
    let totalWin = 0;
    let totalLoss = 0;
    if(partidas.length > 0){
      partidas.forEach(partida =>{
        totalWin+=partida.win
        totalLoss+= partida.loss
      });
    
      let total = totalWin + totalLoss;
      let winRate = (totalWin/total)*100;
      return `${winRate.toPrecision(2)}%`;
    }
    else return 'No games'
  }

  public getMatches(baralho:any){
    let id = baralho.id;
    let partidas = this.partidasService.getPartidasbyId(id);
    let totalWin = 0;
    let totalLoss = 0;
    partidas.forEach(partida =>{
      totalWin+=partida.win
      totalLoss+= partida.loss
    });
    return `${totalWin} - ${totalLoss}`;
  }
}
