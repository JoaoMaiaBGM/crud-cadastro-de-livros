import { Router } from "express";
import loginUserController from "../controller/session.controller";

const loginRouter = Router();

loginRouter.post("", loginUserController);

export default loginRouter;
