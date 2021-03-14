import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  updating : boolean = false;
  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap(params => this.customerService.get(params.id))
  );

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

    ngOnInit(): void {
    }

   onUpdate(form: NgForm, customer: Customer): void {

    if (customer.id === 0) {
      this.customerService.create(customer);
      this.router.navigate(['customers']);
    } else {
      this.customerService.update(customer).subscribe(
        () => this.router.navigate(['customers'])
      );
    }
  }
}


