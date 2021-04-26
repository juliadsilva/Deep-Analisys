import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovaPartidaComponent } from './modal-nova-partida.component';

describe('ModalNovaPartidaComponent', () => {
  let component: ModalNovaPartidaComponent;
  let fixture: ComponentFixture<ModalNovaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovaPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNovaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
