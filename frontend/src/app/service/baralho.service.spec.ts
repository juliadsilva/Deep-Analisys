import {  fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaralhoService } from './baralho.service';

describe('BaralhoService', () => {
  let new_baralho = {
    idUsuario: '60ada4ffa7dec534785f2bb1',
    nome: 'test',
    formato: 'test',
    winRate: 0
  }

  let up_baralho = {
    idUsuario: '60ada4ffa7dec534785f2bb1',
    nome: 'teste',
    formato: 'teste',
    winRate: 1
  }

  let wr_baralho = {
    winRate: 2
  }

  let idBaralho = '60ada9fca7dec534785f2bb2';
  let idUsuario = '60ada4ffa7dec534785f2bb1';
  let nome = 'test';

  let service: BaralhoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(BaralhoService);
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
      service.adicionar(new_baralho).subscribe(res => {
        let nome = Object.values(res)[1];
        expect(nome).toEqual('test');
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho`);
      expect(req.request.method).toEqual('POST');
      req.flush(new_baralho);
    }));

    it('Deletar', fakeAsync(() => {
      service.deletar(nome, idUsuario).subscribe(res => {
        let nome = Object.values(res)[1];
        expect(nome).toEqual('test');
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/${idUsuario}/${nome}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(new_baralho);
    }));

    it('Editar', fakeAsync(() => {
      service.editar(idBaralho, up_baralho).subscribe(res => {
        let nome = Object.values(res)[1];
        expect(nome).toEqual('test'); 
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/${idBaralho}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(new_baralho);
    }));

    it('Atualizar Win Rate', fakeAsync(() => {
      service.atualizarWinRate(idBaralho, wr_baralho).subscribe(res => {
        let winRates = Object.values(res)[3];
        expect(winRates).toBe(winRates); 
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/winrate/${idBaralho}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(new_baralho);
    }));

    it('Procurar', fakeAsync(() => {
      service.procurar(nome, idUsuario).subscribe(res => {
        let nome = Object.values(res)[1];
        expect(nome).toEqual('test');  
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/${idUsuario}/${nome}`);
      expect(req.request.method).toEqual('GET');
      req.flush(new_baralho);
    }));

    it('Listar Id User', fakeAsync(() => {
      service.listarIdUser(idUsuario).subscribe(res => {
        let nome = Object.values(res)[2];
        expect(nome).toBe(nome); 
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/idUsuario/${idUsuario}`);
      expect(req.request.method).toEqual('GET');
      req.flush(idUsuario);
    }));

    it('Detalhes', fakeAsync(() => {
      service.detalhes(idBaralho).subscribe(res => {
        let id = Object.values(res)[0];
        expect(id).toEqual('6');   
      });

      const req = httpMock.expectOne(`http://localhost:8080/baralho/${idBaralho}`);
      expect(req.request.method).toEqual('GET');
      req.flush(idBaralho);
    }));
  });
});
