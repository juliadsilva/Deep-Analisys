import { Component, OnInit } from '@angular/core';
import {BaralhoService} from '../service/baralho.service';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.css']
})
export class BaralhoComponent implements OnInit {

  baralhos:any[] = [];

  closeResult: string  = '';

  constructor(private  baralhoService:BaralhoService) { }

  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.baralhos = this.baralhoService.getBaralhos();
  }

  public getWinRate(baralho:any) {
    let win = baralho.win;
    let loss = baralho.loss;
    let total = win + loss;
    let winRate = (win/total)*100;
    return winRate;
  }
}
