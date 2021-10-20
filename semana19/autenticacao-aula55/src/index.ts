import app from "./app";
import { createUser } from "./controllers/createUser";

app.post("/users/signup", createUser);

