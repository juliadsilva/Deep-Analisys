import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-deletar-baralho',
  templateUrl: './modal-deletar-baralho.component.html',
  styleUrls: ['./modal-deletar-baralho.component.css']
})
export class ModalDeletarBaralhoComponent implements OnInit {

  @Output('close')
  deletarBaralhoEmitter: EventEmitter<any> = new EventEmitter<any>();

  baralhos: any[] = [];
  userId: number = 0;

  constructor(private modalService: NgbModal, private baralhoService: BaralhoService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });

    this.baralhoService.listarIdUser(this.userId).subscribe(res=>{
      for( let index = 0; index< res.length; index++ ){
        this.baralhos.push(res[index]);
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  delBaralho(form: any) {
    let nome = form.nome;
    let idUsuario = this.userId;

    this.baralhoService.deletar(nome, idUsuario).subscribe(res => {
      if (res != null) {
        this.toastr.success('Baralho excluído', 'Sucesso!', { timeOut: 5000 });
        this.deletarBaralhoEmitter.emit();
        this.modalService.dismissAll();
      } else
        this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
    });
  }
}

