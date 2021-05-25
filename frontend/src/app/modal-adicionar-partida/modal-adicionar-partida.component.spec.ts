import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalAdicionarPartidaComponent } from './modal-adicionar-partida.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

describe(' ModalAdicionarPartidaComponent', () => {
  let component: ModalAdicionarPartidaComponent;
  let fixture: ComponentFixture< ModalAdicionarPartidaComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ ModalAdicionarPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( ModalAdicionarPartidaComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('Componente criado!', () => {
    expect(component).toBeTruthy();
  });

  it('Abrir modal!', () => {
    spyOn(modalService, 'open').calls;
    component.open('<xxxx>');
    expect(modalService.open).toHaveBeenCalledWith('<xxxx>', Object({ centered: true, size: 'sm' }));
  });
});
