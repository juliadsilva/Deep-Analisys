import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAdicionarPartidaComponent } from './modal-adicionar-partida.component';
import { RouterTestingModule } from '@angular/router/testing';

describe(' ModalAdicionarPartidaComponent', () => {
  let component: ModalAdicionarPartidaComponent;
  let fixture: ComponentFixture< ModalAdicionarPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ModalAdicionarPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( ModalAdicionarPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
