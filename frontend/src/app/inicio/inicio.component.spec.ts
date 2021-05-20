import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioComponent } from './inicio.component';
import { By } from '@angular/platform-browser';
import userEvent from '@testing-library/user-event'

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [InicioComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Pagina Inicial', () => {

    it('Componente criado!', () => {
      expect(component).toBeTruthy();
    });

    describe('Teste HTML', () => {

      it('Deve ter um titulo', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.nativeElement.querySelector('#titulo').textContent;
        console.log(de);
        expect(de).toEqual('Bem vindo ao Deep Analysis');
      });

      it('Deve ter uma descrição', () => {
        fixture.detectChanges();
        let de = fixture.debugElement.nativeElement.querySelector('#descricao').textContent;
        expect(de).toEqual('Coletor e organizador de dados para Magic: The Gathering Online');
      });

      it('Deve ter uma logo', () => {
        fixture.detectChanges();
        let img = 'http://localhost:9876/assets/img/logo.png'
        let de = fixture.debugElement.nativeElement.querySelector('img').src;
        expect(de).toEqual(img);
      });

      it('Deve ter botoes', () => {
        fixture.detectChanges();
        let b1 = fixture.debugElement.nativeElement.querySelector('#login');
        let b2 = fixture.debugElement.nativeElement.querySelector('#registro');
        let b3 = fixture.debugElement.nativeElement.querySelector('#time');
        expect(b1).toBeTruthy();
        expect(b2).toBeTruthy();
        expect(b3).toBeTruthy();
      });
    });

    describe('Teste CSS', () => {

      it('Deve ter a classe bg-imagem', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.bg-image'));
        expect(el).toBeTruthy();
      });

      it('Deve ter a classe opacity-jumbotron', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.opacity-jumbotron'));
        expect(el).toBeTruthy();
      });

      it('Deve ter a classe text-title', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.text-title'));
        expect(el).toBeTruthy();
      });

      it('Deve ter a classe text-green', () => {
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('.text-green'));
        expect(el).toBeTruthy();
      });
    });

    describe('Teste Funções', () => {
     
    });
  });
});
