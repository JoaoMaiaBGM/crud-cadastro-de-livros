import users from "../../database/users";

const deleteUserService = (id, user) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users.splice(userIndex, 1);

  return { message: "User deleted" };
};

export default deleteUserService;
