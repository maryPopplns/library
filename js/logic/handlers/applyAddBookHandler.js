import { Book } from "../books/Book.js";
import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";
import { localStorage } from "../../localStorage.js";

let count = 0;

function applyAddBookHandler(e) {
  e.preventDefault();

  const HEADER = document.querySelector("h1");
  const HR = document.querySelector("hr");
  const TITLE = document.querySelector("#titleInput").value;
  const AUTHOR = document.querySelector("#authorInput").value;
  const PAGES = document.querySelector("#pagesInput").value;
  const READ = document.querySelector("#readInput").checked;
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");

  HEADER.textContent = "Reading List";
  document.querySelector("#titleInput").value = "";
  document.querySelector("#authorInput").value = "";
  document.querySelector("#pagesInput").value = "";
  document.querySelector("#readInput").checked = false;
  ADD_BOOK_CONTAINER.style.display = "none";
  ADD_BOOK.style.display = "block";
  HEADER.style.color = "#32e1c1";
  HR.style.backgroundColor = "#32e1c1";

  books.push(new Book(TITLE, AUTHOR, PAGES, READ, count));

  count++;
  renderBooks();
  localStorage();
}

export { applyAddBookHandler };
