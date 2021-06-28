import { books } from "../handlers/applyAddBookHandler.js";
import { renderBooks } from "../../UI/books.js";

function cancelAddBookHandler(e) {
  e.preventDefault();
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  ADD_BOOK_CONTAINER.style.display = "none";
  document.querySelector("#titleInput").value = "";
  document.querySelector("#authorInput").value = "";
  document.querySelector("#pagesInput").value = "";
  document.querySelector("#readInput").checked = false;
  // renderBooks();
}

export { cancelAddBookHandler };
