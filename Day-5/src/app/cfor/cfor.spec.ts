import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfor } from './cfor';

describe('Cfor', () => {
  let component: Cfor;
  let fixture: ComponentFixture<Cfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
