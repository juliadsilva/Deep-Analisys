import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-editar-baralho',
  templateUrl: './modal-editar-baralho.component.html',
  styleUrls: ['./modal-editar-baralho.component.css']
})
export class ModalEditarBaralhoComponent implements OnInit {

  @Output('close')
  editBaralhoEmitter: EventEmitter<any> = new EventEmitter<any>();

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

  editBaralho(form: any) {
    let editBaralho = form;
    editBaralho.id = this.baralhoService.getBaralhos().length + 1;
    editBaralho.idUser = this.userId;
    this.baralhoService.editBaralho(editBaralho);
    this.editBaralhoEmitter.emit(editBaralho)
    this.modalService.dismissAll();
  }

}
