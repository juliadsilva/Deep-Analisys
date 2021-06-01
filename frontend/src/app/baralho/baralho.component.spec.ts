import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaralhoComponent } from './baralho.component';
import { BaralhoService } from '../service/baralho.service';
import { UsuarioService } from '../service/usuario.service';

import { Observable } from 'rxjs';

describe('BaralhoComponent', () => {
  let component: BaralhoComponent;
  let fixture: ComponentFixture<BaralhoComponent>;
  let modalService: NgbModal;
  let serviceUsuario: UsuarioService;
  let serviceBaralho: BaralhoService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [BaralhoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaralhoComponent);
    component = fixture.componentInstance;
    serviceUsuario = TestBed.inject(UsuarioService);
    serviceBaralho = TestBed.inject(BaralhoService);
    modalService = TestBed.inject(NgbModal);
    httpMock = TestBed.inject(HttpTestingController);
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

  describe('Services', () => {
    it('Deve usar o UsuarioService', () => {
      serviceUsuario = TestBed.inject(UsuarioService);
      expect(serviceUsuario.detalhes).toBeTruthy();
    });

    it('Deve usar o BaralhoService', () => {
      serviceBaralho = TestBed.inject(BaralhoService);
      expect(serviceBaralho.listarIdUser).toBeTruthy();
    });
  });

  describe('Teste de Funções', () => {
    it('Detalhes do Usuario', () => {
      let id = '60ada4ffa7dec534785f2bb1';
      spyOn(serviceUsuario, 'detalhes').calls;
      component.serviceUsuario();
      expect(serviceUsuario.detalhes).toHaveBeenCalledWith(id);
    });
  });
});

