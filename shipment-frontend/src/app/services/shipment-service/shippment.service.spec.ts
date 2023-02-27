import { TestBed } from '@angular/core/testing';

import { ShippmentService } from './shippment.service';

describe('ShippmentService', () => {
  let service: ShippmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
