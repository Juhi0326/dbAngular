import { TestBed } from '@angular/core/testing';

import { CustomerResolverService } from './customer-resolver.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerService } from './customer.service';

class MockCustomerService {

}

describe('CustomerResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
    ],
    providers: [
      { provide: CustomerService, useClass: MockCustomerService }
    ]
  }));

  it('should be created', () => {
    const service: CustomerResolverService = TestBed.get(CustomerResolverService);
    expect(service).toBeTruthy();
  });
});
