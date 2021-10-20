import { Database } from "./connection";
import { IUser } from "../services/types";

export class CreateUser extends Database {
  public async getEmail(email: string) {
    return await Database.connection("users_aula55")
      .select()
      .where("email", email);
  }

  public async verifyUser(email: string): Promise<boolean> {
    const result: IUser[] = await this.getEmail(email);
    if (result.length) {
      throw new Error("Email Já Cadastrado");
    }
    return true;
  }

  public async create(user: IUser) {
    return await Database.connection("users_aula55").insert(user);
  }
}
