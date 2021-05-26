import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { Md5 } from 'ts-md5';

describe('UsuarioService', () => {
  let new_user = {
    username: 'test',
    estado: 'test',
    cidade: 'test',
    email: 'test@test.com',
    token: '1fb0e331c05a52d5eb847d6fc018320d'
  }

  let id = '60ada4ffa7dec534785f2bb1';
  let username = 'test';
  let email = 'test@test.com';
  let senha = 'testtest';
  let pre_token = username+senha;
  let token = Md5.hashStr(pre_token).toString();

  let service: UsuarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    
    service = TestBed.inject(UsuarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Service - Usuario!', () => {

    it('Service criado!', () => {
      expect(service).toBeTruthy();
    });

    it('Cadastrar', fakeAsync(() => {
      service.cadastrar(new_user).subscribe(res => {
        let username = Object.values(res)[1];
        expect(username).toEqual('test');
      });

      const req = httpMock.expectOne(`http://localhost:8080/usuario`);
      expect(req.request.method).toEqual('POST');
      req.flush(new_user);
    }));

    it('Login', fakeAsync(() => {
      service.login(token).subscribe(res => {
        expect(res).toContain(0);
      });

      const req = httpMock.expectOne(`http://localhost:8080/usuario/login/${token}`);
      expect(req.request.method).toEqual('GET');
      req.flush(token);
    }));

    it('Detalhes', fakeAsync(() => {
      service.detalhes(id).subscribe(res => {
       expect(res).toContain('6');
      });

      const req = httpMock.expectOne(`http://localhost:8080/usuario/${id}`);
      expect(req.request.method).toEqual('GET');
      req.flush(id);
    }));

    it('Username não existe', fakeAsync(() => {
      service.usernameNaoExiste(username).subscribe(res => {
        let username = Object.values(res)[0];
        expect(username).toEqual('t');
      });

      const req = httpMock.expectOne(`http://localhost:8080/usuario/check/username/${username}`);
      expect(req.request.method).toEqual('GET');
      req.flush(username);
    }));

    it('Email não existe', fakeAsync(() => {
      service.emailNaoExiste(email).subscribe(res => {
        let email = Object.values(res)[0];
        expect(email).toEqual('t');
      });

      const req = httpMock.expectOne(`http://localhost:8080/usuario/check/email/${email}`);
      expect(req.request.method).toEqual('GET');
      req.flush(email);
    }));
  });
});
