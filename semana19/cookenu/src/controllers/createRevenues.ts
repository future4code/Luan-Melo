import { Request, Response } from "express";
import { CreateRevenues } from "../database/CreateRevenues";
import { Revenues } from "../models/Revenues";
import { Authenticator } from "../services/Authentication";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, IRevenues } from "../services/types";
import moment from "moment";

export const createRevenues = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send("Autorização obrigatória!");
    }

    const auth: authenticationData | null = new Authenticator().getTokenData(
      token
    );

    if (!auth) {
      return res
        .status(401)
        .send("Insira o token do usuário para acessar a plataforma.");
    }

    if (!title || !description) {
      return res
        .status(400)
        .send("todos os campos precisam ser preenchidos, title, description");
    }

    const id: string = new IdGenerator().generateId();

    const modifyData: string = moment(new Date()).format("YYYY/MM/DD");
    const newRevenues: IRevenues = new Revenues(
      id,
      title,
      description,
      modifyData,
      auth.id
    );
    await new CreateRevenues().create(newRevenues);
    res.status(201).send(newRevenues);
  } catch (error: any) {
    res.send({ message: error.sqlMessage || error.message });
  }
};
