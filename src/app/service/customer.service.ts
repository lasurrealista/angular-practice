import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = 'http://localhost:3000/customers';
  customerList$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

  constructor(private http: HttpClient) {
  }

  getAll(): void {
    this.http.get<Customer[]>(this.apiUrl).subscribe(ev => this.customerList$.next(ev))
  }

  get(id: number): Observable<Customer> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Customer | undefined = this.customerList$.value.find(item => item.id === id);
    if (ev) {
      return of(ev);
    }
    return of(new Customer());
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.apiUrl}/${customer.id}`, customer);
  }

  create(customer: Customer): void {
    this.http.post<Customer>(this.apiUrl, customer).subscribe(
      () => this.getAll()
    );
  }

  remove(customer: Customer): void {
    this.http.delete(`${this.apiUrl}/${customer.id}`).subscribe(
      () => this.getAll()
    );
  }

}
