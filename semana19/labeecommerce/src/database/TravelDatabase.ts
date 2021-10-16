import { Travel } from "../models/travel";
import { Database } from "./Database";

export class TravelDatabase extends Database {
  public async create(travel: Travel) {
    return await Database.connection("ecommerce_tickets").insert(travel);
  }

  public async getAll() {
    return await Database.connection("ecommerce_tickets");
  }
}
