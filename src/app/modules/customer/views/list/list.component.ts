import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CustomerListDto } from 'src/app/core/dto/customer-list.dto';
import { ICustomer } from 'src/app/core/interfaces/customer.interface';
import { CustomerProvider } from 'src/app/core/providers/customer.provider';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  customers$!: Observable<CustomerListDto[]>;

  customerNameFormControl = new FormControl<string>('');

  constructor(private customerProvider: CustomerProvider) {
    this.getCustomersByName();
  }

  getCustomersByName(name?: string) {
    this.customers$ = this.customerProvider
      .getCustomersByName(name || '')
      .pipe(map((customers) => this.toCustomerListDto(customers)));
  }

  toCustomerListDto(customers: ICustomer[]) {
    return customers.map(
      (customer) =>
        new CustomerListDto(
          customer.id,
          customer.name,
          customer.email,
          customer.cpf,
          customer.createdAt
        )
    );
  }

  onRemoveButtonClick(id: string): void {
    this.customerProvider.remove('customers/', id).subscribe(() => {
      this.customers$ = this.customers$.pipe(
        map((customers) => customers.filter((customer) => customer.id !== id))
      );
    });
  }

  ngOnInit(): void {
    this.customerNameFormControl.valueChanges.subscribe((name) => {
      this.getCustomersByName(name!);
    });
  }
}
