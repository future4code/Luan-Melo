import { Request, Response } from "express";
import { CreateUser } from "../database/CreateUser";
import { Authenticator } from "../services/Authentication";
import { authenticationData } from "../services/types";

export const getProfileUsers = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send("token inválido!");
    }

    const auth: authenticationData | null = new Authenticator().getTokenData(
      token
    );

    if (!auth) {
      return res
        .status(401)
        .send("Insira o token do usuário para acessar a plataforma.");
    }

    const user = await new CreateUser().getProfileByUser(auth.id);
    return res.status(200).send(user);
  } catch (error: any) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
};
