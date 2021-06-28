import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";

function cancelAddBookHandler(e) {
  e.preventDefault();

  const HEADER = document.querySelector("h1");
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");
  ADD_BOOK_CONTAINER.style.display = "none";
  ADD_BOOK.style.display = "block";
  HEADER.textContent = "Reading List";

  document.querySelector("#titleInput").value = "";
  document.querySelector("#authorInput").value = "";
  document.querySelector("#pagesInput").value = "";
  document.querySelector("#readInput").checked = false;

  renderBooks();
}

export { cancelAddBookHandler };
