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
  public name: string;
  public age: number;

  private transactions: Transaction[] = [];

  constructor(
    private cpf: string,
    name: string,
    age: number,
    public balance: number
  ) {
    this.name = name;
    this.age = age;
  }

  public setTransation(transation: Transaction): void {
    this.transactions.push(transation);
  }
}

export class Bank {
  private accounts: UserAccount[] = [];

  constructor(public name: string) {}

  public accountsBank(bank: UserAccount): void {
    this.accounts.push(bank);
  }
}
export const bank: Bank = new Bank("Itau");
export const user: UserAccount = new UserAccount(
  "30230203201",
  "Luan",
  23,
  30000
);

export const user1: UserAccount = new UserAccount(
  "31234514312213",
  "Mat",
  28,
  300000
);

bank.accountsBank(user);
bank.accountsBank(user1);
