import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suspensiva } from './suspensiva';

describe('Suspensiva', () => {
  let component: Suspensiva;
  let fixture: ComponentFixture<Suspensiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suspensiva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suspensiva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
