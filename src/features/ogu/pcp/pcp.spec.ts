import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcp } from './pcp';

describe('Pcp', () => {
  let component: Pcp;
  let fixture: ComponentFixture<Pcp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pcp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pcp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
