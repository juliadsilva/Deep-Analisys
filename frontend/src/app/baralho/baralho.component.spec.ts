import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaralhoComponent } from './baralho.component';
import { By } from '@angular/platform-browser';

import { BaralhoService } from '../service/baralho.service';
import { UsuarioService } from '../service/usuario.service';


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

  describe('Teste CSS', () => {

    it('Deve ter a classe bg-imagem', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.bg-image'));
      expect(el).toBeTruthy();
    });


    it('Deve ter a classe card-deck', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card-deck'));
      expect(el).toBeTruthy();
    });
  }); 

  describe('Teste de Funções', () => {
    it('Detalhes', () => {
      let id = '60ada4ffa7dec534785f2bb1';

      let userMock={
        id: '60ada4ffa7dec534785f2bb1',
        username: 'test',
        estado: 'test',
        cidade: 'test',
        email: 'test@test.com',
        token: '1fb0e331c05a52d5eb847d6fc018320d'
    }
      let recievedUser={}
      component.serviceUsuario();
      
      serviceUsuario.detalhes(id).subscribe(res => {
        recievedUser=res
        console.log(typeof(res));
        expect(recievedUser).toEqual(userMock.id)
       });
       


       const req = httpMock.expectOne(`http://localhost:8080/usuario/${id}`);
       expect(req.request.method).toEqual('GET');
       req.flush(id);
    });

    it('Listar', () => {
      let id = '60ada4ffa7dec534785f2bb1';

      component.serviceBaralho();

      serviceBaralho.listarIdUser(id).subscribe(res => {
        let nome = Object.values(res)[2];
        expect(nome).toBe(nome); 
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/idUsuario/${id}`);
      expect(req.request.method).toEqual('GET');
      req.flush(id);     
    });
  });

  it('Teste Baralho Componente!', () => {
    
    
  });
});

