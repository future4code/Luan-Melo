import { Product } from "./product";

export class Travel extends Product {
  constructor(
    private id: string,
    name: string,
    description: string,
    price: number,
    public source: string,
    public destiny: string
  ) {
    super(id, name, description, price);
  }
}
