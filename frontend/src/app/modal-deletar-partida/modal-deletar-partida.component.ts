import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PartidasService } from '../service/partidas.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-modal-deletar-partida',
  templateUrl: './modal-deletar-partida.component.html',
  styleUrls: ['./modal-deletar-partida.component.css']
})
export class ModalDeletarPartidaComponent implements OnInit {

  @Output('close')
  deletarPartidaEmitter: EventEmitter<any> = new EventEmitter<any>();

  partidas: any[] = [];
  baralhoId: number = 0;
  partidaId: number = 0;

  constructor(private modalService: NgbModal, private partidasService: PartidasService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = params.id;
    });

    this.partidasService.listarIdBaralho(this.baralhoId).subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.partidas.push(res[index]);
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }

  delPartida(form: any) {
    let identi = form.id;
    let IdBaralho = this.baralhoId;

    this.partidasService.procurar(identi, IdBaralho).subscribe(res => {
      if (res != null) {
        this.partidaId = Object.values(res)[0];
        this.partidasService.deletar(this.partidaId).subscribe(res => {
          if (res != null) {
            this.toastr.success('Partida excluída', 'Sucesso!', { timeOut: 5000 });
            this.deletarPartidaEmitter.emit();
            this.modalService.dismissAll();
          } else
            this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
        });
      }else
        this.toastr.error('Ops, algo deu muito errado :(!', 'Erro!', { timeOut: 5000 });
    });
  }
}
