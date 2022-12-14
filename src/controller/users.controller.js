import createUserService from "../services/users/createUsers.services";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.services";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await createUserService(name, email, password);

  return res.status(201).json(user);
};

const listUsersController = (req, res) => {
  const users = listUsersService();

  return res.status(200).json(users);
};

const updateUserController = (req, res) => {
  const user = req.body;
  const id = req.params.id;

  const updateUser = updateUserService(id, user);

  return res.status(200).json(updateUser);
};

const deleteUserController = (req, res) => {
  const id = req.params.id;

  const deleteUser = deleteUserService(id);

  return res.status(200).json({ message: "User deleted" });
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
