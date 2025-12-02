import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reprogramacao } from './reprogramacao';

describe('Reprogramacao', () => {
  let component: Reprogramacao;
  let fixture: ComponentFixture<Reprogramacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reprogramacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reprogramacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
