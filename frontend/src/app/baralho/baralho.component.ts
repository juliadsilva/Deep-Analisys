import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Service
import { BaralhoService } from '../service/baralho.service';
import { PartidasService } from '../service/partidas.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.css']
})

export class BaralhoComponent implements OnInit {

  baralhos: any;
  usuario: any;

  closeResult: string = '';

  public userId: number = 0;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private baralhoService: BaralhoService, 
    private partidasService: PartidasService, 
    private usuarioService: UsuarioService) { }

  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id
    });
    this.baralhos = this.baralhoService.listar(this.userId);
    this.usuario = this.usuarioService.listar(this.userId);
  }

  public getWinRate(baralho: any) {
    let id = baralho.id;
    let partidas = this.partidasService.getpartidasbyId(id);
    let totalWin = 0;
    let totalLoss = 0;
    if (partidas.length > 0) {
      partidas.forEach(partida => {
        totalWin += partida.win
        totalLoss += partida.loss
      });

      let total = totalWin + totalLoss;
      let winRate = (totalWin / total) * 100;
      return `${winRate.toPrecision(2)}%`;
    }
    else return 'No games'
  }

  public getMatches(baralho: any) {
    let id = baralho.id;
    let partidas = this.partidasService.getpartidasbyId(id);
    let totalWin = 0;
    let totalLoss = 0;

    partidas.forEach(partida => {
      totalWin += partida.win
      totalLoss += partida.loss
    });
    return `${totalWin} - ${totalLoss}`;
  }

  
}
