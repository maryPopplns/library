import { Book } from "../books/Book.js";
import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";

function applyAddBookHandler(e) {
  e.preventDefault();

  const TITLE = document.querySelector("#titleInput").value;
  const AUTHOR = document.querySelector("#authorInput").value;
  const PAGES = document.querySelector("#pagesInput").value;
  const READ = document.querySelector("#readInput").checked;
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");
  // ADD_BOOK_CONTAINER.style.display = "none";
  // ADD_BOOK.style.display = "block";

  books.push(new Book(TITLE, AUTHOR, PAGES, READ));

  // renderBooks();
}

export { applyAddBookHandler };
