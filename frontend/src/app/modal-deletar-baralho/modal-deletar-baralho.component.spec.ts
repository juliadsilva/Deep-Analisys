import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDeletarBaralhoComponent } from './modal-deletar-baralho.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalDeletarBaralhoComponent', () => {
  let component: ModalDeletarBaralhoComponent;
  let fixture: ComponentFixture<ModalDeletarBaralhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ModalDeletarBaralhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
