import { User } from "./user";

export class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }

  public setPurchase(value: number): void {
    this.purchaseTotal = value;
  }
}

export const customer: Customer = new Customer(
  "1",
  "luan@gmail.com",
  "Luan",
  "3213090031ddas",
  "3029391239213"
);

customer.setPurchase(10);
console.log(customer.getId());
console.log(customer.getEmail());
console.log(customer.getName());
console.log(customer.getPassword());
console.log(customer.getCreditCard());
console.log(customer.introduceYourself());
