import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Licitacao } from './licitacao';

describe('Licitacao', () => {
  let component: Licitacao;
  let fixture: ComponentFixture<Licitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Licitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Licitacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
