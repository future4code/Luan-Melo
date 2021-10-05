import { connection } from "../DBconnection/connection";

export const doCreateTask = async (
  title: string,
  description: string,
  limiteDate: string,
  idUser: number
): Promise<any> => {
  try {
    const checkTitle = await connection("tasks")
      .select()
      .count("title as titleCount")
      .where({ title });
    const titleExists = checkTitle[0].titleCount;
    if (titleExists > 0) {
      throw new Error("this title has already been registered");
    }

    await connection("tasks")
      .insert({ title, description, limiteDate, id_user_creator: idUser })
      .into("tasks");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getTaskById = async (id: number): Promise<any> => {
  const result = await connection("tasks")
    .select(["tasks.*", "users.name as creatorUserNickname"])
    .innerJoin("users", "id_user_creator", "users.id")
    .where("users.id", id);
  return result[0];
};
