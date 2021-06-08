import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule} from 'ngx-toastr';
import { ModalDeletarBaralhoComponent } from './modal-deletar-baralho.component';
import { By } from '@angular/platform-browser';

describe('ModalDeletarBaralhoComponent', () => {

  let del_baralho = {
    nome: 'test',
    idUsuario: 'test'
  };

  let component: ModalDeletarBaralhoComponent;
  let fixture: ComponentFixture<ModalDeletarBaralhoComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ ModalDeletarBaralhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarBaralhoComponent);
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

  describe('Teste CSS', () => {

    it('Deve ter a classe fixed-button', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.fixed-button'));
      expect(el).toBeTruthy();
    });
  });

  describe('Teste Funções', () => {
    
  });  
});
