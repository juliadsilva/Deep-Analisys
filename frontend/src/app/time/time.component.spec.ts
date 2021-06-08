import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeComponent } from './time.component';
import { By } from '@angular/platform-browser';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado!', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste CSS', () => {

    it('Deve ter a classe bg', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.bg'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe card', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe card-deck', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card-deck'));
      expect(el).toBeTruthy();
    });

    it('Deve ter a classe card-img', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card-img'));
      expect(el).toBeTruthy();
    });
  });

});
