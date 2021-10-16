import { Router } from "express";
import { filterProducts } from "../controllers/filterProduct";
import { filterUsers } from "../controllers/filterUser";
import { createProduct } from "../controllers/product";
import { travel } from "../controllers/travel";
import { createUser } from "../controllers/user";
const router = Router();

router.post("/users", createUser);
router.post("/products", createProduct);
router.get("/users", filterUsers);
router.get("/products", filterProducts);
router.post("/travels", travel);

export default router;
