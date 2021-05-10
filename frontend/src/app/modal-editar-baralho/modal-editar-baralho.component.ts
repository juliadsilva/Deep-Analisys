import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BaralhoService } from '../service/baralho.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-editar-baralho',
  templateUrl: './modal-editar-baralho.component.html',
  styleUrls: ['./modal-editar-baralho.component.css']
})
export class ModalEditarBaralhoComponent implements OnInit {

  @Output('close')
  editBaralhoEmitter: EventEmitter<any> = new EventEmitter<any>();

  baralhos: any[] = [];
  userId: number = 0;
  idBaralho: number = 0;

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

  editBaralho(form: any) {

    let nomeselect = form.nomeselect;
    let idUsuario = this.userId;

    let nome= form.nome;
    let cor = form.cor;

    let up_baralho = {
      nome: nome,
      cor: cor
    }
    
    this.baralhoService.procurar(nomeselect, idUsuario).subscribe(res => {
      if (res != null) {
        this.idBaralho = Object.values(res)[0];
        this.baralhoService.editar(this.idBaralho, up_baralho).subscribe(res => {
          if (res.length != 0) {
            this.toastr.success('Baralho atualizado', 'Sucesso!', { timeOut: 5000 });
            this.editBaralhoEmitter.emit(up_baralho);
            this.modalService.dismissAll();
          } else
            this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
        });
      } else
      this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
    });       
  }
}
