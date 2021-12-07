import { AddressInfo } from "net";
import { app } from "./app";
import dotenv from "dotenv"

dotenv.config()


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server is running in http://localhost: ${address.port}`);
  }
});
