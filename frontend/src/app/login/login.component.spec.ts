import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { fireEvent } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Md5 } from 'ts-md5';

import { UsuarioService } from '../service/usuario.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: UsuarioService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [UsuarioService],
      declarations: [LoginComponent]
    })
      .compileComponents();

    service = TestBed.inject(UsuarioService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Pagina de Login!', () => {

    it('Componente criado!', () => {
      expect(component).toBeTruthy();
    });

    describe('Services', () => { 
      it('Deve usar o UsuarioService', () => {
        service = TestBed.inject(UsuarioService);
        expect(service.cadastrar).toBeTruthy();
    });

    });
   
    describe('Teste HTML', () => {

      it('Deve ter um titulo', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('#titulo')).nativeElement.textContent;
        expect(de).toEqual('Login');
      });

      it('Deve ter um formulario com os campos vazios', () => {
        fixture.detectChanges();
        let test = {
          username: '',
          senha: ''
        }
        let user = {
          username: fixture.debugElement.query(By.css('input[name="username"]')).nativeElement.value,
          senha: fixture.debugElement.query(By.css('input[name="senha"]')).nativeElement.value
        }
        expect(user).toEqual(test);
      });

      it('Deve ter uma logo', () => {
        fixture.detectChanges();
        let img = 'http://localhost:9876/assets/img/logo.png'
        let de = fixture.debugElement.query(By.css('img')).nativeElement.src
        expect(de).toEqual(img);
      });

      it('Deve ter botão', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('#b1'));
        expect(de).toBeTruthy();
      });

      it('Deve ter um link', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('a'));
        expect(de).toBeTruthy();
      });
    });

    describe('Teste CSS', () => {

      it('Deve ter a classe bg-imagem', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.bg-image'));
        expect(el).toBeTruthy();
      });

      it('Deve ter a classe opacity-card', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.opacity-card'));
        expect(el).toBeTruthy();
      });

      it('Deve ter a classe text-green', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.text-green'));
        expect(el).toBeTruthy();
      });

      it('Deve ter a classe text-center', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.text-center'));
        expect(el).toBeTruthy();
      });
    });

    describe('Teste Funções', () => {

      it('Funcionalidade preencher campos', fakeAsync(() => {
        const username = fixture.debugElement.query(By.css('input[name="username"]')).nativeElement;
        const senha = fixture.debugElement.query(By.css('input[name="senha"]')).nativeElement;
        fixture.detectChanges();

        fireEvent.change(username, { target: { value: "test" } });
        fireEvent.change(senha, { target: { value: "test" } });
        fixture.detectChanges();

        expect(username.value).toEqual('test');
        expect(senha.value).toEqual('test');
      }));

      it('Login', fakeAsync(() => {
        const username = fixture.debugElement.query(By.css('input[name="username"]')).nativeElement;
        const senha = fixture.debugElement.query(By.css('input[name="senha"]')).nativeElement;
        fixture.detectChanges();

        fireEvent.change(username, { target: { value: "test" } });
        fireEvent.change(senha, { target: { value: "test" } });
        fixture.detectChanges();

        let pre_token = username+senha;
        let token = Md5.hashStr(pre_token).toString();

        component.login(token);

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          service.login(token).subscribe(res => {
            expect(res).toContain(0);
          });
    
          const req = httpMock.expectOne(`http://localhost:8080/usuario/login/${token}`);
          expect(req.request.method).toEqual('GET');
          req.flush(token);
        });
      }));
    });
  });
});

