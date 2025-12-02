import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contratacao } from './contratacao';

describe('Contratacao', () => {
  let component: Contratacao;
  let fixture: ComponentFixture<Contratacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contratacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contratacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
