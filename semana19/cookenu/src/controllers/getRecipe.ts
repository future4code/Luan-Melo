import { Request, Response } from "express";
import moment from "moment";
import { CreateRevenues } from "../database/CreateRevenues";
import { Authenticator } from "../services/Authentication";
import { authenticationData, IRecipe } from "../services/types";

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
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

    if (!id) {
      return res.status(400).send("id inválido.");
    }

    const recipe: IRecipe[] = await new CreateRevenues().getRecipe(id);
    const result: IRecipe = {
      id: recipe[0].id,
      title: recipe[0].title,
      description: recipe[0].description,
      creation_date: moment(recipe[0].creation_date).format("DD/MM/YYYY"),
    };

    return res.status(200).send(result);
  } catch (error: any) {
    return res.status(400).send({ message: error.sqlMessage || error.message });
  }
};
