import { IEntity } from "./entity.interface";

export interface ICustomer extends IEntity {
  name: string;
  email: string;
}
