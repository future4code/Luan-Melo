import { Request, Response } from "express";
import { user } from "../constants/types";
import { users } from "../constants/users";

import {
  createUser,
  findUserBalance,
  addBalance,
  payment,
} from "../models/bank";

export const createUserBank = (req: Request, res: Response) => {
  try {
    const { name, cpf, age } = req.body;

    if (age < 18) {
      throw new Error("you must be of legal age to register");
    }

    const create = createUser(name.toLowerCase(), cpf, age);
    return res.send(create);
  } catch (error: any) {
    return res.send(error.message);
  }
};

export const getUserBank = (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;
    const cpf: number = Number(req.query.cpf);

    if (!name && !cpf) {
      throw new Error("no data was provided!");
    }

    if (name && !cpf) {
      res.statusCode = 422;
      throw new Error("please insert the cpf to start the consultation.");
    }

    if (!name && cpf) {
      res.statusCode = 422;
      throw new Error("please enter the name to start the consultation.");
    }

    const findBalance: {} = findUserBalance(name.toLowerCase(), cpf);

    if (!findBalance) {
      res.statusCode = 404;
      throw new Error("unregistered user.");
    }

    return res.send(findBalance);
  } catch (error: any) {
    return res.send(error.message);
  }
};

export const addNewBalance = (req: Request, res: Response) => {
  try {
    const name: string = req.body.name as string;
    const cpf: number = Number(req.body.cpf);
    const balance: number = Number(req.body.balance);

    if (!name && !cpf) {
      throw new Error("no data was provided!");
    }

    if (name && !cpf) {
      res.statusCode = 422;
      throw new Error("please insert the cpf to start the consultation.");
    }

    if (!name && cpf) {
      res.statusCode = 422;
      throw new Error("please enter the name to start the consultation.");
    }

    if (balance < 0) {
      res.statusCode = 422;
      throw new Error("your balance cannot be negative");
    }

    if (balance > 5000) {
      res.statusCode = 422;
      throw new Error("the balance limit for any account is 5000");
    }

    const balanceValue: user | undefined = addBalance(name, cpf, balance);
    return res.send(balanceValue);
  } catch (error: any) {
    return res.send(error.message);
  }
};

export const bankPayments = (req: Request, res: Response) => {
  try {
    const { name, value, description, data } = req.body;

    if (description.length < 5) {
      throw new Error("your description must contain at least 6 characters");
    }

    const result: user[] | string = payment(name, value, description, data);
    return res.send(result);
  } catch (error: any) {
    return res.send(error.message);
  }
};
