import { Component, OnInit } from '@angular/core';
import {BaralhoService} from '../service/baralho.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-novo-baralho',
  templateUrl: './modal-novo-baralho.component.html',
  styleUrls: ['./modal-novo-baralho.component.css']
})
export class ModalNovoBaralhoComponent implements OnInit {

  constructor(private modalService: NgbModal, private baralhoService:BaralhoService) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {centered: true});
  }

  addBaralho(){
    let newBaralho = {
      'id': 6,
      'usuario': 'Maria',
      'cor': 'Azul',
      'win': 9,
      'loss': 1
    }

    this.baralhoService.addBaralho(newBaralho);

  }
}
