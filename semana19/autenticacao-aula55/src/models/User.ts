export class Users {
  public email: string;
  public password: string;

  constructor(public id: string, email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
