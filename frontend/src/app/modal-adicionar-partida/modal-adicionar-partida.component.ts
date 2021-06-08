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

  constructor(private modalService: NgbModal,  private partidasService: PartidasService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = params.id;
    });

    this.partidasService.listarIdBaralho(this.baralhoId).subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.partidas.push(res[index]);
      }
    });
    
    this.partidas.sort(this.compare);
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addpartida(form: any) {
    
    let id = this.getNewId();
    console.log(id);
    let win = form.win;
    let loss = form.loss;
    let idBaralho = this.baralhoId.toString().trim();

    if (!this.validateScore(parseInt(win), parseInt(loss))) return;
    else {
      let new_partida = {
        ident: id,
        win: win,
        loss: loss,
        idBaralho: idBaralho
      };

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

  validateScore(win: number, loss: number) {
    if (win > 2 || loss > 2 || win < 0 || loss < 0) {
      this.toastr.error('Ops, valores devem estar entre zero e dois!', 'Erro!', { timeOut: 5000 });
      return false;
    }
    return true;
  }

  compare(a:any,b:any) {
    if (a.ident < b.ident) return -1;
    if (a.ident > b.ident) return 1;
    return 0;
  }

  getNewId(){
    if(this.partidas.length == 0)
      return 1;
    else    
      return this.partidas[this.partidas.length-1].ident+1;   
  }
}