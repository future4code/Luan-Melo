import { Request, Response } from "express";
import { ProductDatabase } from "../database/productDatabase";

export const filterProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productDatabase = new ProductDatabase();
    const product_results = await productDatabase.getAllProduct();
    res.send({
      message: "Sucess",
      product_results,
    });
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
