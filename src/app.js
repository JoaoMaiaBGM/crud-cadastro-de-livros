import express from "express";
import userRouter from "./routes/users.routes";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/users", userRouter);
app.use("/books", userRouter);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
