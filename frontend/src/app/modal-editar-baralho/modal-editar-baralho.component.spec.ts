import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import { ModalEditarBaralhoComponent } from './modal-editar-baralho.component';

describe('ModalEditarBaralhoComponent', () => {

  let edit_baralho = {
    nomeselect: 'test',
    idUsuario: 'test',
    nome: 'test',
    formato: 'test'
  }
  
  let component: ModalEditarBaralhoComponent;
  let fixture: ComponentFixture<ModalEditarBaralhoComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ ModalEditarBaralhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarBaralhoComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('Componente criado!', () => {
    expect(component).toBeTruthy();
  });

  it('Abrir modal!', () => {
    spyOn(modalService, 'open').calls;
    component.open('<xxxx>');
    expect(modalService.open).toHaveBeenCalledWith('<xxxx>', Object({ centered: true, size: 'sm' }));
  });

  describe('Teste Funções', () => {
    it('Editar baralho', () => {
      spyOn(component, 'editBaralho');

      fixture.whenStable().then(() => {
        expect(component.editBaralho(edit_baralho)).toHaveBeenCalled();
        fixture.detectChanges();
      });
    });
  });
});
