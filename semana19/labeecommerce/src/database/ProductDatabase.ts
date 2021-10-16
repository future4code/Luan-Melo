import { Product } from "../models/product";
import { Database } from "./Database";

export class ProductDatabase extends Database {
  public async create(product: Product) {
    return await Database.connection("ecommerce_products").insert(product);
  }

  public async getAllProduct() {
    return await Database.connection("ecommerce_products");
  }
}
