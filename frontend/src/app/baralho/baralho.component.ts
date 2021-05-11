import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  baralhos: any[] = [];
  partidas: any[] = [];
  usuario: any;

  public userId: number = 0;

  constructor(private route: ActivatedRoute, private form: FormsModule, private baralhoService: BaralhoService, private partidasService: PartidasService, private usuarioService: UsuarioService) { }

  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id
    });
        
    this.baralhoService.listarIdUser(this.userId).subscribe(res=>{
      for( let index = 0; index< res.length; index++ ){
        this.baralhos.push(res[index]);
      }
    });
    
    this.usuarioService.detalhes(this.userId).subscribe(res =>{
      this.usuario = Object.values(res);
    });
  }
  
  public getWinRate(baralho: any) {
    /*let id = baralho.id;
    let partidas = this.partidasService.listarIdBaralho(id);
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
    else*/
    return 'No games'
  }

  public getMatches(baralho: any) {
    let id = baralho.id;
    let totalWin = 0;
    let totalLoss = 0;

    this.partidas.forEach(partida => {
      totalWin += partida.win
      totalLoss += partida.loss
    });
    return `${totalWin} - ${totalLoss}`;
  }
}
