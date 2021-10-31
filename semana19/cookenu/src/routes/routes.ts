import { Router } from "express";
import { createRevenues } from "../controllers/createRevenues";
import { createUser } from "../controllers/createUser";
import { getProfileFromAnotherUser } from "../controllers/getProfileFromAnotherUser";
import { getProfileUsers } from "../controllers/getProfileUser";
import { getRecipe } from "../controllers/getRecipe";
import { login } from "../controllers/login";

const router = Router();

router.post("/users/singup", createUser);
router.post("/users/login", login);
router.post("/recipe", createRevenues);
router.get("/user/profile", getProfileUsers);
router.get("/user/:id", getProfileFromAnotherUser);
router.get("/recipe/:id", getRecipe);

export default router;
