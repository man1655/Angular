import { TestBed } from '@angular/core/testing';

import { QuizServices } from './quiz-services';

describe('QuizServices', () => {
  let service: QuizServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
