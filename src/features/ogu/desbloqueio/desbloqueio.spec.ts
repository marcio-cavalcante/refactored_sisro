import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desbloqueio } from './desbloqueio';

describe('Desbloqueio', () => {
  let component: Desbloqueio;
  let fixture: ComponentFixture<Desbloqueio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desbloqueio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desbloqueio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
