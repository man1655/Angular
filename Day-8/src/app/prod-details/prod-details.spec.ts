import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetails } from './prod-details';

describe('ProdDetails', () => {
  let component: ProdDetails;
  let fixture: ComponentFixture<ProdDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
