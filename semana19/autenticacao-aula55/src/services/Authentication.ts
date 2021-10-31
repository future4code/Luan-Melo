import dotenv from "dotenv";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { authenticationData } from "../services/types";

dotenv.config();

export class Authenticator {
  public generateToken = (payload: authenticationData) => {
    const token = sign(payload, "teste222", { expiresIn: "10h" });
    return token;
  };

  public getTokenData = (token: string): authenticationData | null => {
    try {
      const tokenData = verify(token, "teste222") as JwtPayload;
      return {
        id: tokenData.id,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
