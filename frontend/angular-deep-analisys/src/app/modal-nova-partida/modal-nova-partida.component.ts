import { Component, OnInit } from '@angular/core';

import {PartidaService} from '../service/partida.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-nova-partida',
  templateUrl: './modal-nova-partida.component.html',
  styleUrls: ['./modal-nova-partida.component.css']
})
export class ModalNovaPartidaComponent implements OnInit {

  constructor(private modalService: NgbModal, private partidaService:PartidaService) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {centered: true, size: 'sm'});
  }

  addPartida(form:any){
    let newPartida = form;
    newPartida.id = this.partidaService.getPartidas().length + 1;
    this.partidaService.addPartida(newPartida );
    }
}
