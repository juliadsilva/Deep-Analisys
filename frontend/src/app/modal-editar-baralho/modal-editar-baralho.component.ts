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

  baralhos: any;
  
  userId: number = 0;

  constructor(private modalService: NgbModal, private baralhoService: BaralhoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = parseInt(params.id);
    });
    this.baralhos = this.baralhoService.listar(this.userId);
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  editBaralho(form: any) {
    let upBaralho = form;
    this.baralhoService.editar(upBaralho);
    this. editBaralhoEmitter.emit(upBaralho)
    this.modalService.dismissAll();
  }

}
