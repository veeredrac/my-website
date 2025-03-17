import { TestBed } from '@angular/core/testing';

import { BankAccountDetailsService } from './bank-account-details.service';

describe('BankAccountDetailsService', () => {
  let service: BankAccountDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAccountDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
