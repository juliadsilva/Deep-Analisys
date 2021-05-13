import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalAdicionarPartidaComponent } from './modal-adicionar-partida.component';
import { ToastrModule } from 'ngx-toastr';

describe(' ModalAdicionarPartidaComponent', () => {
  let component: ModalAdicionarPartidaComponent;
  let fixture: ComponentFixture< ModalAdicionarPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
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
