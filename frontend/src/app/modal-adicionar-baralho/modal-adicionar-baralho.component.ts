import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-adicionar-baralho',
  templateUrl: './modal-adicionar-baralho.component.html',
  styleUrls: ['./modal-adicionar-baralho.component.css']
})
export class ModalAdicionarBaralhoComponent implements OnInit {


  @Output('close')
  novoBaralhoEmitter: EventEmitter<any> = new EventEmitter<any>();

  userId: number = 0;

  constructor(private modalService: NgbModal, private baralhoService: BaralhoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = parseInt(params.id);
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addBaralho(form: any) {
    let newBaralho = form;
    this.baralhoService.adicionar(newBaralho, this.userId);
    this.novoBaralhoEmitter.emit(newBaralho)
    this.modalService.dismissAll();
  }
}
