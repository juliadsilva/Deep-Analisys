import { Component, OnInit } from '@angular/core';
import {PartidaService} from '../service/partida.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  
  partidas:any[] = [];

  closeResult: string  = '';


  constructor(private  partidaService:PartidaService) { }

  ngOnInit(): void {
    this.partidas = this.partidaService.getPartidas();
  }

  public getWinRate(partida:any) {
    let win = partida.win;
    let loss = partida.loss;
    let total = win + loss;
    let winRate = (win/total)*100;
    return winRate.toPrecision(3);
  }
}
