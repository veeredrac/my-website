import { TestBed } from '@angular/core/testing';

import { FlipkartDetailsService } from './flipkart-details.service';

describe('FlipkartDetailsService', () => {
  let service: FlipkartDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
