import { User } from "../models/user";
import { Database } from "./Database";

export class UserDatabase extends Database {
  public async create(user: User) {
    return await Database.connection("ecommerce_users").insert(user);
  }

  public async getAll() {
    return await Database.connection("ecommerce_users");
  }
}
