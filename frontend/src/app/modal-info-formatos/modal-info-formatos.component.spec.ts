import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInfoFormatosComponent } from './modal-info-formatos.component';

describe('ModalInfoFormatosComponent', () => {
  let component: ModalInfoFormatosComponent;
  let fixture: ComponentFixture<ModalInfoFormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoFormatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
