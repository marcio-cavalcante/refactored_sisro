import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnContainer } from './two-column-container';

describe('TwoColumnContainer', () => {
  let component: TwoColumnContainer;
  let fixture: ComponentFixture<TwoColumnContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoColumnContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
