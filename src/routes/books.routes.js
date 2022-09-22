import { Router } from "express";
import {
  createBookController,
  deleteBookController,
  listBooksController,
  updateBookController,
} from "../controller/books.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";
import verifyTitleAvailabilitydMiddleware from "../middleware/verifyTitleAvailability.middleware";

const bookRouter = Router();

bookRouter.post(
  "",
  verifyAuthTokenMiddleware,
  verifyTitleAvailabilitydMiddleware,
  createBookController
);
bookRouter.get("", verifyAuthTokenMiddleware, listBooksController);
bookRouter.patch("/:id", verifyAuthTokenMiddleware, updateBookController);
bookRouter.delete("/:id", verifyAuthTokenMiddleware, deleteBookController);

export default bookRouter;
