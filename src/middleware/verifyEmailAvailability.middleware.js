import users from "../database/users";

const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;

  const isEmailAlreadyUsed = users.find((user) => user.email === email);

  if (isEmailAlreadyUsed) {
    return res
      .status(400)
      .json({ message: "This email is already being used" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
