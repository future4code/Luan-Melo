import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { User } from "../models/user";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      throw new Error("All fields must be filled.");
    }

    const checkUserDatabase = new UserDatabase();
    await checkUserDatabase.creatureNewUser(name, email, age);

    res.status(201).send("User Created Successfully!");
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
