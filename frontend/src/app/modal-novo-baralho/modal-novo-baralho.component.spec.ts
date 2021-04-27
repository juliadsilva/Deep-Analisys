import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalNovoBaralhoComponent } from './modal-novo-baralho.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalNovoBaralhoComponent', () => {
  let component: ModalNovoBaralhoComponent;
  let fixture: ComponentFixture<ModalNovoBaralhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ModalNovoBaralhoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
