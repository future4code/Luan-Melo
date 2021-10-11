class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 10;
  private transactions: Transaction[] = [];

  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getAge(): number {
    return this.age;
  }

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

export const user: UserAccount = new UserAccount("03320222123", "Luan", 10);

export class Bank {
  private accounts: UserAccount[];
  private value: number;

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): number {
    return (this.value = value);
  }

  constructor(accounts: UserAccount[], value: number) {
    this.value = value;
    this.accounts = accounts;
  }
}

export const bank: Bank = new Bank([], 10);
