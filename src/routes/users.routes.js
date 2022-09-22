import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controller/users.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUsersController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;
