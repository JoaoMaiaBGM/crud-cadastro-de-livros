import { Router } from "express";

const userRouter = Router();

userRouter.post("");
userRouter.post("/login");
userRouter.get("");
userRouter.patch("/:id");
userRouter.delete("/:id");

export default userRouter;
