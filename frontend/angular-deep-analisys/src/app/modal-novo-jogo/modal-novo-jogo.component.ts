import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JogoService } from '../service/jogo.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-novo-jogo',
  templateUrl: './modal-novo-jogo.component.html',
  styleUrls: ['./modal-novo-jogo.component.css']
})
export class ModalNovoJogoComponent implements OnInit {

  @Output('close')
  novojogoEmitter: EventEmitter<any> = new EventEmitter<any>();

  baralhoId: number = 0;

  constructor(private modalService: NgbModal, private jogoService: JogoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = parseInt(params.id);
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addjogo(form: any) {
    let newjogo = form;
    newjogo.id = this.jogoService.getjogos().length + 1;
    newjogo.idBaralho = this.baralhoId;
    this.jogoService.addjogo(newjogo);
    this.novojogoEmitter.emit(newjogo);
    this.modalService.dismissAll();
  }

}
