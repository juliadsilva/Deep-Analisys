import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule} from 'ngx-toastr';
import { ModalDeletarPartidaComponent } from './modal-deletar-partida.component';

describe('ModalDeletarPartidaComponent', () => {
  let component: ModalDeletarPartidaComponent;
  let fixture: ComponentFixture<ModalDeletarPartidaComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ ModalDeletarPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarPartidaComponent);
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
