import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadePage } from './unidade-page';

describe('UnidadePage', () => {
  let component: UnidadePage;
  let fixture: ComponentFixture<UnidadePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
