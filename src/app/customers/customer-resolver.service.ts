import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CustModell } from './cust-modell';
import { Observable, of, EMPTY } from 'rxjs';
import { CustomerService } from './customer.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolverService implements Resolve<CustModell> {

  constructor
    (private customerService: CustomerService,
      private router: Router) { }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): CustModell | Observable<CustModell> | Promise<CustModell> {

    const id = route.paramMap.get('id');
    return this.customerService.GetCustomerById(id).pipe(
      take(1),
      mergeMap(customer => {
        if (customer) {
          return of(customer);
        } else { // id not found
          this.router.navigate([`/customers`]);
          return EMPTY;
        }
      })

    );
  }


}
