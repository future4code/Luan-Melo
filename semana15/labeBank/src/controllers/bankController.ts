import { Request, Response } from "express";
import { user } from "../constants/types";
import { users } from "../constants/users";

import { createUser, findUserBalance } from "../models/bank";

export const createUserBank = (req: Request, res: Response) => {
  try {
    const { name, cpf, age } = req.body;

    if (age < 18) {
      throw new Error("you must be of legal age to register");
    }

    if (cpf.length !== 11) {
      throw new Error("the number of digits for the cpf is 11 characters");
    }

    const create = createUser(name, cpf.toString(), age);
    return res.send(create);
  } catch (error: any) {
    return res.send(error.message);
  }
};

export const getUserBank = (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;
    const cpf: string = req.query.cpf as string;

    if (!name && !cpf) {
      throw new Error("no data was provided!");
    }

    const findBalance: user | undefined = findUserBalance(name, cpf);

    if (!findBalance) {
      res.statusCode = 404;
      throw new Error("unregistered user.");
    }

    return res.send(findBalance);
  } catch (error: any) {
    return res.send(error.message);
  }
};
