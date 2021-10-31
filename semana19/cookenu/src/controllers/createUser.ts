import { Request, Response } from "express";
import { Users } from "../models/User";
import { CreateUser } from "../database/CreateUser";
import { Authenticator } from "../services/Authentication";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/IdGenerator";
import { IUser } from "../services/types";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Informações inválidas.");
    }

    if (!email.length && email.indexOf("@") - 1) {
      return res.status(400).send("Email Inválido");
    }

    if (password.length < 6) {
      return res
        .status(400)
        .send("senha muito fraca, a senha deve conter no mínimo 6 digots.");
    }

    const users: IUser[] = await new CreateUser().getEmail(email);

    if (users.length) {
      return res.status(401).send("Email Já Cadastrado");
    }

    const id: string = new IdGenerator().generateId();
    const cipherPassword: string = new HashManager().generateHash(password);
    const user: IUser = new Users(id, name, email, cipherPassword);
    const userDB = new CreateUser();
    await userDB.create(user);
    const token = new Authenticator().generateToken({ id });
    res.status(201).send({ message: "usuário registrado com sucesso", token });
  } catch (error: any) {
    res.send({ message: error.sqlMessage || error.message });
  }
};
