import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFor } from './c-for';

describe('CFor', () => {
  let component: CFor;
  let fixture: ComponentFixture<CFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
