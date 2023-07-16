import { TestBed } from '@angular/core/testing';

import { ApishootService } from './apishoot.service';

describe('ApishootService', () => {
  let service: ApishootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApishootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
