import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-adicionar-baralho',
  templateUrl: './modal-adicionar-baralho.component.html',
  styleUrls: ['./modal-adicionar-baralho.component.css']
})
export class ModalAdicionarBaralhoComponent implements OnInit {

  @Output('close')
  novoBaralhoEmitter: EventEmitter<any> = new EventEmitter<any>();

  userId: number = 0;

  constructor(private modalService: NgbModal, private baralhoService: BaralhoService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  addBaralho(form: any) {
    let nome = form.nome;
    let cor = form.cor;
    let idUsuario = this.userId;

    let new_baralho = {
      nome: nome,
      cor: cor,
      idUsuario: idUsuario
    };

    this.baralhoService.adicionar(new_baralho).subscribe(res => {
      if (res.length != 0) {
        this.toastr.success('Baralho criado', 'Sucesso!', { timeOut: 5000 });
        this.novoBaralhoEmitter.emit(new_baralho);
        this.modalService.dismissAll();
      } else
        this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
    });
  }
}
