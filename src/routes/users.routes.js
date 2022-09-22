import { Router } from "express";
import {
  createUserController,
  listUsersController,
  loginUserController,
} from "../controller/users.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", listUsersController);
userRouter.patch("/:id");
userRouter.delete("/:id");

export default userRouter;
