import books from "../database/books";

const verifyTitleAvailabilitydMiddleware = (req, res, next) => {
  const { title } = req.body;

  const ensureTitle = books.find((book) => book.title === title);

  if (ensureTitle) {
    return res.status(400).json({
      message: "This book already exist",
    });
  }

  next();
};

export default verifyTitleAvailabilitydMiddleware;
