import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEditarBaralhoComponent } from './modal-editar-baralho.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalEditarBaralhoComponent', () => {
  let component: ModalEditarBaralhoComponent;
  let fixture: ComponentFixture<ModalEditarBaralhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ModalEditarBaralhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
