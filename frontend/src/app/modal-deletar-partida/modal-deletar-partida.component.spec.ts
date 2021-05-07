import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDeletarPartidaComponent } from './modal-deletar-partida.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalDeletarPartidaComponent', () => {
  let component: ModalDeletarPartidaComponent;
  let fixture: ComponentFixture<ModalDeletarPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ModalDeletarPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
