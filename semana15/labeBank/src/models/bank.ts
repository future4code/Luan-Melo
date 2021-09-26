import { user } from "../constants/types";
import { users } from "../constants/users";

const userBank: user[] = [...users];

// criar usuário

export const createUser = (name: string, cpf: number, age: number): user => {
  var data = new Date();

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

// pegar saldo

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
      return true;
    }
  });

  let userUpdate: user | undefined;

  if (userToUpdate) {
    userToUpdate.balance = balance;
  }

  return userUpdate;
};

//pagar conta

export const payment = (
  name: string,
  value: number,
  description: string,
  data: number,
  valuePay?: number
): user[] | string => {
  valuePay = 4500;
  if (valuePay > value) {
    throw new Error(
      "your payment cannot be made due to the amount entered being less than the total 4500R$."
    );
  }

  if (valuePay > 4500) {
    throw new Error(`the maximum value is ${valuePay}`);
  }

  if (!value || value <= 0) {
    throw new Error("no value was offered");
  }

  if (!description) {
    throw new Error(
      "you need to enter a description for us to make the payment."
    );
  }

  const findUser: user[] = userBank.filter((user) => {
    user.name === name && Number(user.balance) > 0;
  });

  if (findUser) {
    if (!data) {
      return `Payment in the amount of ${value} will be made within 30 minutes Description: ${description}.`;
    } else {
      return `Payment in the amount of ${value} scheduled for tomorrow Description: ${description}.`;
    }
  }

  return findUser;
};

export const transfer = () => {};
