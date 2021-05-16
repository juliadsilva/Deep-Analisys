import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-info-formatos',
  templateUrl: './modal-info-formatos.component.html',
  styleUrls: ['./modal-info-formatos.component.css']
})
export class ModalInfoFormatosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size: 'sm' });
  }
}
