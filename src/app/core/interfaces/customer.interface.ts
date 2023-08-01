import { IEntity } from "./entity.interface";

export interface ICustomer extends IEntity {
  id: string;
  address: string;
  city: string;
  cpf: string;
  email: string;
  name: string;
  state: string;
  tax: string;
  paymentMethod: number;
  cardName: string;
  expirationMonth: string;
  expirationYear: string;
  cardNumber: string;
  cardCode: string;
}
