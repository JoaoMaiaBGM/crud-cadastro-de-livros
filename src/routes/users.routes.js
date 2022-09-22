import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
} from "../controller/users.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUsersController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id");

export default userRouter;
