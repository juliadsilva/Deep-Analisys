import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAdicionarBaralhoComponent } from './modal-adicionar-baralho.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalAdicionarBaralhoComponent', () => {
  let component: ModalAdicionarBaralhoComponent;
  let fixture: ComponentFixture<ModalAdicionarBaralhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ModalAdicionarBaralhoComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicionarBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
