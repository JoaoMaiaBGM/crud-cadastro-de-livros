import users from "../../database/users";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUserService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return "Email ou senha inválidos";
  }

  const isPasswordMatch = bcrypt.compareSync(password, user.password);

  if (!isPasswordMatch) {
    return "Email ou senha inválidos";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", {
    expiresIn: "2h",
    subject: user.id,
  });

  return { token };
};

export default loginUserService;
