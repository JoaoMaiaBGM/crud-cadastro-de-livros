import createUserService from "../services/users/createUsers.services";
import listUsersService from "../services/users/listUsers.services";
import loginUserService from "../services/users/loginUser.service";

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await createUserService(name, email, password);

  return res.status(201).json(user);
};

const listUsersController = (req, res) => {
  const users = listUsersService();

  return res.status(200).json(users);
};

const loginUserController = (req, res) => {
  const { email, password } = req.body;

  const login = loginUserService(email, password);

  return res.status(200).json(login);
};

export { createUserController, listUsersController, loginUserController };
