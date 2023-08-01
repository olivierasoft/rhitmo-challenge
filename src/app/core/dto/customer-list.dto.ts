export class CustomerListDto {
  id!: string;
  name!: string;
  email!: string;
  cpf!: string;
  createdAt!: Date

  constructor(id: string, name: string, email: string, cpf: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.createdAt = createdAt;
  }
}
