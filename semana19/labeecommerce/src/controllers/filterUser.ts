import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";

export const filterUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userDatabase = new UserDatabase();
    const users_results = await userDatabase.getAll();
    res.send({
      message: "Sucess",
      users_results,
    });
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
};
