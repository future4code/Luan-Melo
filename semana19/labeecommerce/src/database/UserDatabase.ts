import { CustomError } from "../errors/CustomError";
import { User } from "../models/user";
import { Database } from "./Database";

export class UserDatabase extends Database {
  public async getUserByEmail(email: string) {
    return await Database.connection("ecommerce_users")
      .select("email")
      .where("email", email);
  }

  public async creatureNewUser(
    name: string,
    email: string,
    age: number
  ): Promise<boolean> {
    await this.getUserByEmail(email).then((response: any) => {
      const emailExists = response[0].email;
      if (emailExists && emailExists !== undefined) {
        throw new CustomError("email já existe", 400);
      }
    });

    const id: string = Date.now() + Math.ceil(Math.random()).toString();
    const user: User = new User(id, name, email, age);
    const userDatabase = new UserDatabase();
    await userDatabase.create(user);
    return true;
  }

  public async create(user: User) {
    return await Database.connection("ecommerce_users").insert(user);
  }

  public async getAll() {
    return await Database.connection("ecommerce_users");
  }
}
