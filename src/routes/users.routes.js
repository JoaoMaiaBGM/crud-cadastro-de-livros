import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controller/users.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailability.middleware";

const userRouter = Router();

userRouter.post("", verifyEmailAvailabilityMiddleware, createUserController);
userRouter.get("", listUsersController);
userRouter.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
userRouter.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default userRouter;
