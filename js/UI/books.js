import { books } from "../logic/books/bookStore.js";

let count = 0;

function renderBooks() {
  const MAIN = document.querySelector("main");
  const BOOK_CONTAINER = document.createElement("div");

  BOOK_CONTAINER.setAttribute("id", "bookContainer");

  MAIN.append(BOOK_CONTAINER);

  books.forEach((e) => {
    const BOOK = document.createElement("ol");
    // const TITLE = document.createElement("li");
    // const AUTHOR = document.createElement("li");
    // const PAGES = document.createElement("li");
    // const READ = document.createElement("li");
    BOOK.setAttribute("class", "book");
    BOOK.setAttribute("id", count);

    BOOK_CONTAINER.append(BOOK);

    count++;
  });
}

export { renderBooks, count };
