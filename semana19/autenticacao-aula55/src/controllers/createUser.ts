import { Request, Response } from "express";
import { Users } from "../models/User";
import { CreateUser } from "../database/CreateUser";
import { Authenticator } from "../services/Authentication";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/IdGenerator";
import { IUser } from "../services/types";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 400;
      throw new Error("Informações inválidas.");
    }

    if (!email.length && email.indexOf("@") - 1) {
      throw new Error("Email Inválido");
    }
    //Validar se o usuário já existe!
    const userExist = new CreateUser();
    res.statusCode = 401;
    await userExist.verifyUser(email);

    //Cadastrar o usuário
    const id: string = new IdGenerator().generateId();
    const cipherPassword: string = new HashManager().generateHash(password);
    const user: IUser = new Users(id, email, cipherPassword);
    const userDB = new CreateUser();
    await userDB.create(user);
    const token = new Authenticator().generateToken({ id });
    res.status(201).send({ user, token });
  } catch (error: any) {
    res.send({ message: error.sqlMessage || error.message });
  }
};
