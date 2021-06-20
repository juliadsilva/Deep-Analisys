import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ModalDeletarPartidaComponent } from './modal-deletar-partida.component';
import { By } from '@angular/platform-browser';
import { fireEvent } from '@testing-library/angular';

import { PartidasService } from '../service/partidas.service';

describe('ModalDeletarPartidaComponent', () => {
  let del_partida = {
    ident: 1,
    idBaralho: 'test'
  };

  let component: ModalDeletarPartidaComponent;
  let fixture: ComponentFixture<ModalDeletarPartidaComponent>;
  let modalService: NgbModal;
  let toastr: ToastrService;
  let servicePartida: PartidasService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ ModalDeletarPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarPartidaComponent);
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
