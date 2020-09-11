import { TestBed } from '@angular/core/testing';

import { PecuniabankService } from './pecuniabank.service';

describe('PecuniabankService', () => {
  let service: PecuniabankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecuniabankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
