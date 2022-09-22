import createBookService from "../services/books/createBook.service";
import deleteBookService from "../services/books/deleteBook.service";
import listBooksService from "../services/books/listBooks.service";
import updateBookService from "../services/books/updateBook.service";

const createBookController = (req, res) => {
  const { title, author, year } = req.body;

  const userId = req.user.id;

  const book = createBookService(title, author, year, userId);

  return res.status(201).json(book);
};

const listBooksController = (req, res) => {
  const books = listBooksService();

  return res.status(200).json(books);
};

const updateBookController = (req, res) => {
  const book = req.body;
  const userId = req.user.id;

  const updatedBook = updateBookService(userId, book);

  return res.status(200).json(updatedBook);
};

const deleteBookController = (req, res) => {
  const bookId = req.user.id;

  const deletedBook = deleteBookService(bookId);

  return res.status(200).json({ message: "Book deleted" });
};

export {
  createBookController,
  listBooksController,
  updateBookController,
  deleteBookController,
};
