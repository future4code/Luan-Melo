import { Request, Response } from "express";
import moment from "moment";
import { doCreateTask, getTaskById } from "../models/task";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, limiteDate, id_user_creator } = req.body;

    if (!title || !description || !limiteDate || !id_user_creator)
      return res.status(400).send("all data needs to be filled.");

    if (
      title === "" &&
      description === "" &&
      limiteDate === "" &&
      id_user_creator === ""
    )
      return res.status(400).send("no fields were filled");

    await doCreateTask(
      title,
      description,
      moment(limiteDate).format("YYYY-MM-DD"),
      id_user_creator
    );
    res.send("task created sucess");
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const getTasksById = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);

    if (!id) {
      return res.send("id invaled");
    }
    const result = await getTaskById(id);
    return res.send(result);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
