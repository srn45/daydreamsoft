import { TestBed } from '@angular/core/testing';

import { AaplService } from './aapl.service';

describe('AaplService', () => {
  let service: AaplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
