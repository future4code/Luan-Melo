import { Response, Request } from "express";
import { TravelDatabase } from "../database/TravelDatabase";
import { Travel } from "../models/travel";

export const travel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, source, destiny } = req.body;

    if (!name || !description || !price || !source || !destiny) {
      throw new Error("All fields must be filled.");
    }

    const id: string = Date.now() + Math.ceil(Math.random()).toString();
    const travel: Travel = new Travel(
      id,
      name,
      description,
      price,
      source,
      destiny
    );
    const travelDatabase = new TravelDatabase();
    await travelDatabase.create(travel);
    res.send("trip created successfully.");
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
