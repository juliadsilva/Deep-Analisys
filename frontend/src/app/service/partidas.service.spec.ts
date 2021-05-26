import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PartidasService } from './partidas.service';

describe('PartidasService', () => {
  let new_partida = {
    idBaralho: '60ada9fca7dec534785f2bb2',
    win: 2,
    loss: 0
  }

  let  idBaralho = '60ada9fca7dec534785f2bb2';
  let  ident = '60adb300a7dec534785f2bb3';

  let service: PartidasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(PartidasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Service - Usuario!', () => {

    it('Service criado!', () => {
      expect(service).toBeTruthy();
    });

    it('Adicionar', fakeAsync(() => {
      service.adicionar(new_partida).subscribe(res => {
        let win = Object.values(res)[1];
        expect(win).toBe(win);
      });

      const req = httpMock.expectOne(`http://localhost:8080/partida`);
      expect(req.request.method).toEqual('POST');
      req.flush(new_partida);
    }));

    it('Procurar', fakeAsync(() => {
      service.procurar(ident, idBaralho).subscribe(res => {
        let win = Object.values(res)[1];
        expect(win).toBe(win);
      });

    const req = httpMock.expectOne(`http://localhost:8080/partida/${idBaralho}/${ident}`);
      expect(req.request.method).toEqual('GET');
      req.flush(new_partida);
    }));

    it('Deletar', fakeAsync(() => {
      service.deletar(ident).subscribe(res => {
        let id = Object.values(res);
        expect(id).toBe(id);
      });

      const req = httpMock.expectOne(`http://localhost:8080/partida/${ident}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(new_partida);
    }));
  });
});
