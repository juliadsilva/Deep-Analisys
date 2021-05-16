import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BaralhoService } from '../service/baralho.service';
import { PartidasService } from '../service/partidas.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-adicionar-partida',
  templateUrl: './modal-adicionar-partida.component.html',
  styleUrls: ['./modal-adicionar-partida.component.css']
})
export class ModalAdicionarPartidaComponent implements OnInit {

  @Output('close')
  novaPartidaEmitter: EventEmitter<any> = new EventEmitter<any>();

  partidas: any[] = [];
  baralhoId: number = 0;
  id: number = 0;

  constructor(private modalService: NgbModal,  private baralhoService: BaralhoService, private partidasService: PartidasService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = params.id;
    });

    this.partidasService.listarIdBaralho(this.baralhoId).subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.partidas.push(res[index]);
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addpartida(form: any) {
    let id = this.partidas.length + 1;
    let win = form.win;
    let loss = form.loss;
    let idBaralho = this.baralhoId;

    let new_partida = {
      ident: id,
      win: win,
      loss: loss,
      idBaralho: idBaralho
    };
    
    console.log(new_partida)
    this.partidasService.adicionar(new_partida).subscribe(res => {
      if (res.length != 0) {
        this.toastr.success('Partida criada', 'Sucesso!', { timeOut: 5000 });
        this.novaPartidaEmitter.emit(new_partida);
        this.modalService.dismissAll();
        location.reload();  
      } else
        this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
    });
  }
}