import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromGroup } from './from-group';

describe('FromGroup', () => {
  let component: FromGroup;
  let fixture: ComponentFixture<FromGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
