import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosExtra } from './servicos-extra';

describe('ServicosExtra', () => {
  let component: ServicosExtra;
  let fixture: ComponentFixture<ServicosExtra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosExtra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosExtra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
