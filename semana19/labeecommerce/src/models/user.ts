export class User {
  private name: string;
  private email: string;
  private age: number;

  constructor(public id: string, name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}
