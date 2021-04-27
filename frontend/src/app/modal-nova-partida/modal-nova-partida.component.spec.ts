import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalNovaPartidaComponent } from './modal-nova-partida.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalNovaPartidaComponent', () => {
  let component: ModalNovaPartidaComponent;
  let fixture: ComponentFixture<ModalNovaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ModalNovaPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
