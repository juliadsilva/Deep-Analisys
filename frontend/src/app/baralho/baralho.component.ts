import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  winrate: any[] = [];

  public userId: number = 0;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private form: FormsModule, private baralhoService: BaralhoService, private partidasService: PartidasService, private usuarioService: UsuarioService) { }

  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id
    });

    this.usuarioService.detalhes(this.userId).subscribe(res => {
      this.usuario = Object.values(res);
    });

    this.baralhoService.listarIdUser(this.userId).subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.baralhos.push(res[index]);
        
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  public getWinRate(baralhoId: number) {

  }

  public getMatches(baralhoId: number) {   
  }
}
