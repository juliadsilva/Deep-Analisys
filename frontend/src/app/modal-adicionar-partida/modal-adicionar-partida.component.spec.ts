import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalAdicionarPartidaComponent } from './modal-adicionar-partida.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { By } from '@angular/platform-browser';
import { fireEvent } from '@testing-library/angular';

import { PartidasService } from '../service/partidas.service';

describe(' ModalAdicionarPartidaComponent', () => {
  let new_partida = {
    ident: 1,
    win: 2,
    loss: 1,
    idBaralho: 'test'
  };

  let component: ModalAdicionarPartidaComponent;
  let fixture: ComponentFixture< ModalAdicionarPartidaComponent>;
  let modalService: NgbModal;
  let toastr: ToastrService;
  let servicePartida: PartidasService;
  let httpMock: HttpTestingController;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [PartidasService],
      declarations: [ ModalAdicionarPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( ModalAdicionarPartidaComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('Componente criado!', () => {
    expect(component).toBeTruthy();
  });

  describe('Services', () => {
    it('Deve usar o PartidasService', () => {
      servicePartida = TestBed.inject(PartidasService);
      expect(servicePartida.listarIdBaralho).toBeTruthy();
    });
  });

  it('Abrir modal!', () => {
    spyOn(modalService, 'open').calls;
    component.open('<xxxx>');
    expect(modalService.open).toHaveBeenCalledWith('<xxxx>', Object({ centered: true, size: 'sm' }));
  });

  describe('Teste CSS', () => {

    it('Deve ter a classe fixed-button', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.fixed-button'));
      expect(el).toBeTruthy();
    });
  });
});
