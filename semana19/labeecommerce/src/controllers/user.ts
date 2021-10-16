import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/user";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      throw new Error("All fields must be filled.");
    }

    const id: string = Date.now() + Math.ceil(Math.random()).toString();
    const user: User = new User(id, name, email, age);
    const userDatabase = new UserDatabase();
    await userDatabase.create(user);

    res.send("User Created Successfully!");
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
