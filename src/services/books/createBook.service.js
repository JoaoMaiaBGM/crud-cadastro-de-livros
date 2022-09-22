import books from "../../database/books";

const createBookService = (title, author, year, userId) => {
  const newBook = {
    title,
    author,
    year,
    owner_id: userId,
  };

  books.push(newBook);

  return newBook;
};

export default createBookService;
