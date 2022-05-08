import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarReservaComponent } from './cadastrar-reserva.component';

describe('CadastrarUsuarioComponent', () => {
  let component: CadastrarReservaComponent;
  let fixture: ComponentFixture<CadastrarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
