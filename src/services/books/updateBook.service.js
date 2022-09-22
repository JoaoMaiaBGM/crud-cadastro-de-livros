import books from "../../database/books";

const updateBookService = (userId, book) => {
  const bookIndex = books.findIndex((book) => book.owner_id === userId);

  if (bookIndex === -1) {
    throw new Error("Book not found");
  }

  books[bookIndex] = { ...books[bookIndex], ...book };

  return books[bookIndex];
};

export default updateBookService;
