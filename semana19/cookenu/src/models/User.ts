export class Users {
  public name: string;
  public email: string;
  public password: string;

  constructor(
    public id: string,
    name: string,
    email: string,
    password: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
