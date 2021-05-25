import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInfoFormatosComponent } from './modal-info-formatos.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ModalInfoFormatosComponent', () => {
  let component: ModalInfoFormatosComponent;
  let fixture: ComponentFixture<ModalInfoFormatosComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoFormatosComponent ],
      imports: [NgbModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoFormatosComponent);
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
