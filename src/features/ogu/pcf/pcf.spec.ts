import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcf } from './pcf';

describe('Pcf', () => {
  let component: Pcf;
  let fixture: ComponentFixture<Pcf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pcf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pcf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
