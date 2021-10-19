export class Product {
  private name: string;
  private description: string;
  private price: number;

  constructor(id: string, name: string, description: string, price: number) {
    (this.name = name), (this.description = description), (this.price = price);
  }
}
