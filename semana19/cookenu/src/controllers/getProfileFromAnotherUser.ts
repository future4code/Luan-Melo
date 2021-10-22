import { Request, Response } from "express";
import { CreateUser } from "../database/CreateUser";
import { Authenticator } from "../services/Authentication";
import { authenticationData } from "../services/types";

export const getProfileFromAnotherUser = async (
  req: Request,
  res: Response
) => {
  try {
    const id: string = req.params.id;
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send("token inválido!");
    }

    if (!id) {
      return res.status(400).send("id inválido");
    }

    const auth: authenticationData | null = new Authenticator().getTokenData(
      token
    );

    if (!auth) {
      return res
        .status(401)
        .send("Insira o token do usuário para acessar a plataforma.");
    }

    const getAnotherUser = await new CreateUser().getProfileByUser(id);

    return res.status(200).send(getAnotherUser);
  } catch (error: any) {
    return res.status(400).send({ message: error.sqlMessage || error.message });
  }
};
