import { Router } from "express";
import { createUserBank, getUserBank, addNewBalance } from "../controllers/bankController";

const router = Router();

//Funcionalidades
//Pegar conta - get
router.get("/users/:search", getUserBank);
//Crair Conta - post
router.post("/users", createUserBank);
//Adicionar saldo
router.put("/users/", addNewBalance);
//Pagar conta - put or post
//transferir dinheiro - post e delete
export default router;
