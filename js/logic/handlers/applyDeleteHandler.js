import { renderBooks } from "../../UI/books.js";
import { books } from "../books/bookStore.js";

function applyDeleteHandler(event) {
  const ADD_BOOK = document.querySelector("#addBook");
  const HEADER = document.querySelector("h1");
  const HR = document.querySelector("hr");
  const DELETE_BUTTONS = document.querySelector("#deleteButtonContainer");

  for (let i = 0; i < books.length; i++) {
    if (+event.target.id === books[i].count) {
      books.splice(i, 1);
      break;
    }
  }
  DELETE_BUTTONS.parentNode.removeChild(DELETE_BUTTONS);

  ADD_BOOK.style.display = "block";
  HEADER.textContent = "Reading List";
  HEADER.style.color = "#32e1c1";
  HR.style.backgroundColor = "#32e1c1";

  renderBooks();
}

export { applyDeleteHandler };
