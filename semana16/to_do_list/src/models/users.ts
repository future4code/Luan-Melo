import { IObject, IObjectAlter } from "../constants/requestModels";
import { connection } from "../DBconnection/connection";

export const doCreateUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  if (name) {
    await connection("users").select().where({ name });
  }

  if (nickname) {
    await connection("users").select().where({ nickname });
  }

  if (email) {
    await connection("users").select().where({ email });
  }

  const createUser = await connection("users")
    .insert({ name, nickname, email })
    .into("users");

  return createUser;
};

export const findUserById = async (id: number): Promise<IObject> => {
  const findById = await connection("users").select().where({ id });

  const userById: IObject = {
    id: findById[0].id,
    nickname: findById[0].nickname,
  };

  return userById;
};

export const alterUserById = async (
  id: number,
  name: string,
  nickname: string
): Promise<void> => {
  const findUserByName = await connection("users")
    .select()
    .count("name as exist")
    .where({ name });
  const nameExists: string | number = findUserByName[0].exist;
  if (nameExists > 0) {
    console.error("Name exist!");
  } else {
  }

  await connection("users").update({ name, nickname }).where({ id });
};
