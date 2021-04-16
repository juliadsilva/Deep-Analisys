import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-novo-baralho',
  templateUrl: './modal-novo-baralho.component.html',
  styleUrls: ['./modal-novo-baralho.component.css']
})
export class ModalNovoBaralhoComponent implements OnInit {


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
    newBaralho.id = this.baralhoService.getBaralhos().length + 1;
    newBaralho.idUser = this.userId;
    this.baralhoService.addBaralho(newBaralho);
    this.novoBaralhoEmitter.emit(newBaralho)
    this.modalService.dismissAll();
  }
}
