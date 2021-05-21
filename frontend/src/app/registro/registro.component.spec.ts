import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import { RouterTestingModule, SpyNgModuleFactoryLoader } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { RegistroComponent } from './registro.component';
import { By } from '@angular/platform-browser';

import { UsuarioService } from '../service/usuario.service';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let service: UsuarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [UsuarioService],
      declarations: [RegistroComponent]
    })
      .compileComponents();

      service = TestBed.inject(UsuarioService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  describe('Pagina de Registro!', () => {

    it('Componente criado!', () => {
      expect(component).toBeTruthy();
    });
    it('Deve usar o UsuarioService', () => {
      service = TestBed.inject(UsuarioService);
      expect(service.cadastrar).toBeTruthy;
    });

    describe('Teste HTML', () => {

      it('Deve ter um titulo', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('#titulo')).nativeElement.textContent;
        expect(de).toEqual('Cadraste-se');
      });

      it('Deve ter uma descricao', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('#descricao')).nativeElement.textContent;
        expect(de).toEqual('Preencha os campos para se cadastrar');
      });

      it('Deve ter um formulario com os campos vazios', () =>{
        fixture.detectChanges();   
        let test = {
          username: '',
          estado: '',
          cidade: '',
          email: '',
          senha: '',
          resenha: ''
        }    
        let user = {
          username: fixture.debugElement.query(By.css('input[name="username"]')).nativeElement.value,
          estado: fixture.debugElement.query(By.css('input[name="estado"]')).nativeElement.value,
          cidade: fixture.debugElement.query(By.css('input[name="cidade"]')).nativeElement.value,
          email: fixture.debugElement.query(By.css('input[name="email"]')).nativeElement.value,
          senha: fixture.debugElement.query(By.css('input[name="senha"]')).nativeElement.value,
          resenha: fixture.debugElement.query(By.css('input[name="resenha"]')).nativeElement.value
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
        const estado = fixture.debugElement.query(By.css('input[name="estado"]')).nativeElement;
        const cidade = fixture.debugElement.query(By.css('input[name="cidade"]')).nativeElement;
        const email = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement
        const senha = fixture.debugElement.query(By.css('input[name="senha"]')).nativeElement;
        const resenha = fixture.debugElement.query(By.css('input[name="resenha"]')).nativeElement;
        fixture.detectChanges();
        
       
        fireEvent.change(username,  { target: { value: "test" } });
        fireEvent.change(estado,  { target: { value: "test" } });
        fireEvent.change(cidade,  { target: { value: "test" } });
        fireEvent.change(email,  { target: { value: "test@test.com" } });
        fireEvent.change(senha,  { target: { value: "test" } });
        fireEvent.change(resenha,  { target: { value: "test" } });
        fixture.detectChanges();

        expect(username.value).toEqual('test');
        expect(estado.value).toEqual('test');
        expect(cidade.value).toEqual('test');
        expect(email.value).toEqual('test@test.com');
        expect(senha.value).toEqual('test');
        expect(resenha.value).toEqual('test');
      }));    

      it('Funcionalidade botão cadastrar', inject([UsuarioService], (service: UsuarioService) => { 
        let new_user = {
          username: 'test',
          estado: 'test',
          cidade: 'test',
          email: 'test@test.com',
          token: 'test'
        }    
       
        spyOn(component, 'cadastrar'),
        component.cadastrar(new_user);
        expect(component.cadastrar).toHaveBeenCalled();

        expect(service.usernameNaoExiste('test')).toBeTruthy();

      }));
    });
  });
});
