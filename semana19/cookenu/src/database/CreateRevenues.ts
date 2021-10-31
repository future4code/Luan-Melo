import { Database } from "./connection";
import { IRevenues, IRecipe } from "../services/types";
import moment from "moment";

export class CreateRevenues extends Database {
  public async create(revenues: IRevenues): Promise<IRevenues[]> {
    return await Database.connection("cookenu_revenues").insert(revenues);
  }

  public async getRecipe(id: string): Promise<IRecipe[]> {
    return await Database.connection("cookenu_revenues")
      .select("id", "title", "description", "creation_date", "creation_date")
      .where({ id });

  }
}
