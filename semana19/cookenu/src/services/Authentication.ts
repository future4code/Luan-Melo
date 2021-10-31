import dotenv from "dotenv";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { authenticationData } from "../services/types";

dotenv.config();

export class Authenticator {
  public generateToken = (payload: authenticationData) => {
    const jwtKey = process.env.JWT_KEY;
    if (!jwtKey) {
      throw new Error("confira as variáveis de ambiente");
    }
    const token = sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "10h",
    });
    return token;
  };

  public getTokenData = (token: string): authenticationData | null => {
    try {
      const tokenData = verify(
        token,
        process.env.JWT_KEY as string
      ) as JwtPayload;
      return {
        id: tokenData.id,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
