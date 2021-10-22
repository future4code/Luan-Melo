import { Request, Response } from "express";
import { CreateUser } from "../database/CreateUser";
import { Authenticator } from "../services/Authentication";
import { HashManager } from "../services/hashManager";
import { IUser } from "../services/types";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email e senha obrigatório!.");
    }

    const users: IUser[] = await new CreateUser().getEmail(email);
    const passwordIsCorrect: boolean = new HashManager().compareHash(
      password,
      users[0].password
    );

    if (!users.length || !passwordIsCorrect) {
      res.statusCode = 401;
      throw new Error("Credenciais invalidas.");
    }

    const token = new Authenticator().generateToken({
      id: users[0].id,
    });

    res.status(201).send({ token });
  } catch (error: any) {
    res.send({ message: error.sqlMessage || error.message });
  }
};
