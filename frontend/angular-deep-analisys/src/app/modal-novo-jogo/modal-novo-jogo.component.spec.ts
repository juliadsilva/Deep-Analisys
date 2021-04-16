import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoJogoComponent } from './modal-novo-jogo.component';

describe('ModalNovoJogoComponent', () => {
  let component: ModalNovoJogoComponent;
  let fixture: ComponentFixture<ModalNovoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNovoJogoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
