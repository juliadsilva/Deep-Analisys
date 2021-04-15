import { Component, OnInit } from '@angular/core';
import {PartidaService} from '../service/partida.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  
  partidas:any[] = [];
  
  closeResult: string  = '';

  public baralhoId:number = 0;

  constructor(private route:ActivatedRoute, private partidaService:PartidaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.baralhoId = params['id']);
    this.partidas = this.partidaService.getPartidasbyId(this.baralhoId);
  }
  
  public getWinRate(partida:any) {
    let win = partida.win;
    let loss = partida.loss;
    let total = win + loss;
    let winRate = (win/total)*100;
    return winRate.toPrecision(3);
  }
}
