import { user } from "../constants/types";
import { users } from "../constants/users";

const userBank: user[] = [...users];

export const createUser = (name: string, cpf: string, age: number): user => {
  const createUser: user = {
    id: Date.now(),
    name,
    cpf,
    age,
    balance: 0,
  };

  const exists: boolean = userBank.some((validation) => {
    return validation.cpf === cpf;
  });

  if (exists) {
    throw new Error("this cpf is already registered");
  }

  userBank.push(createUser);
  return createUser;
};

export const findUserBalance = (
  name: string,
  cpf: string
): user | undefined => {
  const result: user | undefined = userBank.find((user) => {
    if (user.name === name) {
      return true;
    }
    if (user.cpf === cpf) {
      return true;
    }
  });

  if (!result) {
    throw new Error("no results");
  }

  return result;
};
