import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule} from 'ngx-toastr';
import { ModalAdicionarBaralhoComponent } from './modal-adicionar-baralho.component';

describe('ModalAdicionarBaralhoComponent', () => {
  let component: ModalAdicionarBaralhoComponent;
  let fixture: ComponentFixture<ModalAdicionarBaralhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
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
