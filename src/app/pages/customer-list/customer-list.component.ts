import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$: BehaviorSubject<Customer[]> = this.customerService.customerList$;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }

  onDelete(customer: Customer): void {
    this.customerService.remove(customer);
  }
}
