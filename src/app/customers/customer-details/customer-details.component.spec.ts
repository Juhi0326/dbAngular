import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponent } from './customer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth.service';

class MockCustomerService {
  GetCustomerById() {
    return of({
      age: 123,
      email: 'mock',
      fName: 'mock',
      gender: 'mock',
      isFullTime: false,
      lName: 'mock',
      yearsOfExperience: 11
    });
  }
}

class MockAuthService {

}

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [CustomerDetailsComponent],
      providers: [
        { provide: CustomerService, useClass: MockCustomerService },
        { provide: AuthService, useClass: MockAuthService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
