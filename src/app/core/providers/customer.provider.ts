import { Injectable } from "@angular/core";
import { ICustomer } from "../interfaces/customer.interface";
import { CustomerMock } from "../mocks/customer.mock";
import { DatabaseProvider } from "./database.provider";

@Injectable({
  providedIn: 'root'
})
export class CustomerProvider extends DatabaseProvider<ICustomer> {
  constructor() {
    super(CustomerMock)
  }
}
