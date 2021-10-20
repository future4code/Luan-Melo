import { Router } from "express";
import { createTask, getTasksById } from "../controllers/taskControll";
import {
  createUser,
  getUserById,
  userAlterById,
} from "../controllers/usersControll";

const router = Router();

router.post("/user", createUser);
router.post("/task", createTask);
router.get("/task/:id", getTasksById);
router.get("/user/:id", getUserById);
router.put("/user/edit/:id", userAlterById);

export default router;
