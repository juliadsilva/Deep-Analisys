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
    this.modalService.open(content, {centered: true, size: 'sm'});
  }

  addBaralho(form:any){
    let newBaralho = form;
    newBaralho.id = this.baralhoService.getBaralhos().length + 1;
    this.baralhoService.addBaralho(newBaralho);
    }
}
