import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartidasService } from '../service/partidas.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-adicionar-partida',
  templateUrl: './modal-adicionar-partida.component.html',
  styleUrls: ['./modal-adicionar-partida.component.css']
})
export class ModalAdicionarPartidaComponent implements OnInit {

  @Output('close')
  novaPartidaEmitter: EventEmitter<any> = new EventEmitter<any>();

  baralhoId: number = 0;

  constructor(private modalService: NgbModal, private partidaService: PartidasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = parseInt(params.id);
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addpartida(form: any) {
    let newpartida = form;
    newpartida.id = this.partidaService.getpartidas().length + 1;
    newpartida.idBaralho = this.baralhoId;
    this.partidaService.addpartida(newpartida);
    this.novaPartidaEmitter.emit(newpartida);
    this.modalService.dismissAll();
  }

}