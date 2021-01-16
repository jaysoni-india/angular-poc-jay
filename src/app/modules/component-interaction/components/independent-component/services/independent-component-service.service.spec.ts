import { TestBed } from '@angular/core/testing';

import { IndependentComponentServiceService } from './independent-component-service.service';

describe('IndependentComponentServiceService', () => {
  let service: IndependentComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndependentComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
