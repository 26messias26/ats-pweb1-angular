import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaReservaComponent } from './tabela-reserva.component';

describe('TabelaReservaComponent', () => {
  let component: TabelaReservaComponent;
  let fixture: ComponentFixture<TabelaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
