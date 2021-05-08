import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-deletar-baralho',
  templateUrl: './modal-deletar-baralho.component.html',
  styleUrls: ['./modal-deletar-baralho.component.css']
})
export class ModalDeletarBaralhoComponent implements OnInit {

  @Output('close')
  deletarBaralhoEmitter: EventEmitter<any> = new EventEmitter<any>();
  
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

  delBaralho(form: any) {
    let delBaralho = form.nome;
    this.baralhoService.deletar(delBaralho);
    this.deletarBaralhoEmitter.emit(delBaralho)
    this.modalService.dismissAll();
  }
}
