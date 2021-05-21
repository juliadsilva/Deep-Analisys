import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import userEvent from '@testing-library/user-event';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
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

    describe('Teste HTML', () => {

      it('Deve ter um titulo', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('#titulo')).nativeElement.textContent;
        expect(de).toEqual('Login');
      });

      it('Deve ter um formulario com os campos vazios', () =>{
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

      it('Funcionalidade botão Login', () => {

      });    

      it('Funcionalidade link', () => {
      
      });
    });
  });
});

