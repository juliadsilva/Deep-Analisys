import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartidasService } from '../service/partidas.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-deletar-partida',
  templateUrl: './modal-deletar-partida.component.html',
  styleUrls: ['./modal-deletar-partida.component.css']
})
export class ModalDeletarPartidaComponent implements OnInit {

  @Output('close')
  deletarPartidaEmitter: EventEmitter<any> = new EventEmitter<any>();

  partidas: any[] = [];

  baralhoId: number = 0;

  constructor(private modalService: NgbModal, private partidasService: PartidasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = parseInt(params.id);
    });
    this.partidas = this.partidasService.getpartidasbyId(this.baralhoId)
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  delPartida(form: any) {
    let delPartida = form;
    this.partidasService.delPartida(delPartida);
    this.deletarPartidaEmitter.emit(delPartida);
    this.modalService.dismissAll();
  }
}
