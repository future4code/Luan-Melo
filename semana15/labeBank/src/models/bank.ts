import { user } from "../constants/types";
import { users } from "../constants/users";

const userBank: user[] = [...users];

export const createUser = (name: string, cpf: number, age: number): user => {
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

export const findUserBalance = (name?: string, cpf?: number): {} => {
  const result: {} = userBank
    .filter((user) => {
      if (user.name === name && Number(user.cpf) === cpf) {
        return true;
      }
    })
    .map(({ name, balance }) => {
      return {
        name,
        balance,
      };
    });

  if (!result) {
    throw new Error("no results");
  }

  return result;
};

//adicionar saldo

export const addBalance = (
  name?: string,
  cpf?: number,
  balance?: number
): user | undefined => {
  const userToUpdate: user | undefined = userBank.find((user) => {
    if (user.cpf === cpf && user.name === name) {
      return balance;
    }
  });

  let userUpdate: user | undefined;

  if (userToUpdate) {
  }

  return userUpdate;
};
