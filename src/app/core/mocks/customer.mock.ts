import { ICustomer } from "../interfaces/customer.interface";

export const CustomerMock: ICustomer[] = [
  {
    id: 1,
    name: 'Renan Oliveira',
    email: 'renancesar03@gmail.com',
    createdAt: new Date('2020-01-01')
  },
  {
    id: 2,
    name: 'Shrek',
    email: 'shrek@gmail.com',
    createdAt: new Date('2020-01-02')
  },
  {
    id: 3,
    name: 'Gato de Botas',
    email: 'gatodebotas@gmail.com',
    createdAt: new Date('2020-01-02')
  }
]
