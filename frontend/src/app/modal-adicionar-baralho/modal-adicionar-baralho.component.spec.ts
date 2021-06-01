import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ModalAdicionarBaralhoComponent } from './modal-adicionar-baralho.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ModalAdicionarBaralhoComponent', () => {

  let new_baralho = {
    nome: 'test',
    formato: 'test',
    winrate: 0,
    idUsuario: 'test'
  };

  let component: ModalAdicionarBaralhoComponent;
  let fixture: ComponentFixture<ModalAdicionarBaralhoComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ModalAdicionarBaralhoComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicionarBaralhoComponent);
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
    it('Adicionar baralho', () => {
      spyOn(component, 'addBaralho');

      fixture.whenStable().then(() => {
        expect(component.addBaralho(new_baralho)).toHaveBeenCalled();
        fixture.detectChanges();
      });
    });
  });
});
