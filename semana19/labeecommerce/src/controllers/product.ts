import { Response, Request } from "express";
import { ProductDatabase } from "../database/productDatabase";
import { Product } from "../models/product";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      throw new Error("All fields must be filled.");
    }

    const id: string = Date.now() + Math.ceil(Math.random()).toString();
    const product: Product = new Product(id, name, description, price);
    const productDatabase = new ProductDatabase();
    await productDatabase.create(product);

    res.send("Product Created Successfully!");
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
