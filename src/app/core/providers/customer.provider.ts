import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICustomer } from "../interfaces/customer.interface";
import { RequestProvider } from "./request,provider";

@Injectable()
export class CustomerProvider extends RequestProvider {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.get<ICustomer[], null>('customers')
  }

  getCustomersById(id: string): Observable<ICustomer[]> {
    return this.get<ICustomer[], { id: string }>('customers', {id})
  }

  getCustomersByName(name: string): Observable<ICustomer[]> {
    return this.get<ICustomer[], { name_like: string }>('customers', {name_like: name})
  }
 }
