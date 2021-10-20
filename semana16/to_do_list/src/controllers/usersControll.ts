import { Request, Response } from "express";
import { IObject } from "../constants/requestModels";
import { alterUserById, doCreateUser, findUserById } from "../models/users";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!name && !nickname && !email) {
      return res
        .status(400)
        .send("the name, nickname and email field must be filled.");
    }

    const result = await doCreateUser(name, nickname, email);

    if (!result) {
      return res.status(400).send("the information was not passed correctly.");
    }
    return res.send("User registered successfully.");
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      return res
        .status(400)
        .send("invalid id, enter. Please try again with a valid id.");
    }

    const result: IObject = await findUserById(id);
    return res.send(result);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const userAlterById = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;

    if (!name && !nickname) {
      return res
        .status(400)
        .send("your name and nickname needs to be entered.");
    }

    if (!name || !nickname) {
      return res.status(400).send("the first and last name must be entered.");
    }

    if (isNaN(id)) {
      return res
        .status(400)
        .send("invalid id, enter. Please try again with a valid id.");
    }

    await alterUserById(id, name, nickname);

    return res.send("Sucess");
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
