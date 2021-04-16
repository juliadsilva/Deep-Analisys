import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartidaService } from '../service/partida.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-nova-partida',
  templateUrl: './modal-nova-partida.component.html',
  styleUrls: ['./modal-nova-partida.component.css']
})
export class ModalNovaPartidaComponent implements OnInit {

  @Output('close')
  novaPartidaEmitter: EventEmitter<any> = new EventEmitter<any>();

  baralhoId: number = 0;

  constructor(private modalService: NgbModal, private partidaService: PartidaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = parseInt(params.id);
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addPartida(form: any) {
    let newPartida = form;
    newPartida.id = this.partidaService.getPartidas().length + 1;
    newPartida.idBaralho = this.baralhoId;
    this.partidaService.addPartida(newPartida);
    this.novaPartidaEmitter.emit(newPartida);
    this.modalService.dismissAll();
  }
}
