import books from "../../database/books";

const deleteBookService = (id, book) => {
  const bookIndex = books.findIndex((book) => book.owner_id === id);

  if (bookIndex === -1) {
    throw new Error("Book not found");
  }

  books.splice(bookIndex, 1);

  return { message: "Book deleted" };
};

export default deleteBookService;
