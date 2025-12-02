import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoTrabalho } from './plano-trabalho';

describe('PlanoTrabalho', () => {
  let component: PlanoTrabalho;
  let fixture: ComponentFixture<PlanoTrabalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoTrabalho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoTrabalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
