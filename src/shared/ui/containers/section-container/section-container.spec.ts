import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContainer } from './section-container';

describe('SectionContainer', () => {
  let component: SectionContainer;
  let fixture: ComponentFixture<SectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
