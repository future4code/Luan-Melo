import { Database } from "./connection";
import { IUser } from "../services/types";

export class CreateUser extends Database {
  
  public async getEmail(email: string): Promise<IUser[]> {
    return await Database.connection("cookenu_users")
      .select()
      .where("email", email);
  }

  public async create(user: IUser): Promise<string> {
    return await Database.connection("cookenu_users").insert(user);
  }

  public async getGroup(id: string): Promise<IUser[]> {
    return await Database.connection("cookenu_users")
      .select("group")
      .where("email", id);
  }

  public async getProfileByUser(id: string): Promise<IUser[]> {
    return await Database.connection("cookenu_users")
      .select("id", "name", "email")
      .where({ id });
  }
}
