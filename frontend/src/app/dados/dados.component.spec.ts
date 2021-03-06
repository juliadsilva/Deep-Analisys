import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DadosComponent } from './dados.component';
import { By } from '@angular/platform-browser';

import { PartidasService } from '../service/partidas.service';
import { BaralhoService } from '../service/baralho.service';

describe('DadosComponent', () => {
  let component: DadosComponent;
  let fixture: ComponentFixture<DadosComponent>;
  let servicePartida: PartidasService;
  let serviceBaralho: BaralhoService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DadosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosComponent);
    component = fixture.componentInstance;
    servicePartida = TestBed.inject(PartidasService);
    serviceBaralho = TestBed.inject(BaralhoService);
    httpMock = TestBed.inject(HttpTestingController);
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

    it('Deve usar o BaralhoService', () => {
      serviceBaralho = TestBed.inject(BaralhoService);
      expect(serviceBaralho.atualizarWinRate).toBeTruthy();
    });
  });

  describe('Teste CSS', () => {

    it('Deve ter a classe table', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('table'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe canvas', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('canvas'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe bg-image', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.bg-image'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe card-deck', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card-deck'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe card', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card'));
      expect(el).toBeTruthy();
    });
  });
});
