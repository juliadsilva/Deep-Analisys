import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaralhoComponent } from './baralho.component';

describe('BaralhoComponent', () => {
  let component: BaralhoComponent;
  let fixture: ComponentFixture<BaralhoComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [BaralhoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaralhoComponent);
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
