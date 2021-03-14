import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  updating : boolean = false;
  customer$: Observable<Customer | undefined> = of(new Customer() );

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

   ngOnInit(): void {
    this.customerService.getAll();
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params.id);
        if (params.id == 0) {
          this.customer$ = of( new Customer() );
        } else {
          this.customer$ = this.customerService.get(params.id);
        }
      })
  }

  onUpdate(form: NgForm, customer: Customer): void {

    this.updating = true;

    this.customerService.update(customer).subscribe(
      () => this.router.navigate(['customers'])
    )}

}


