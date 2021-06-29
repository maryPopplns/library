import { renderBooks } from "../../UI/books.js";

function cancelDeleteHandler() {
  const HEADER = document.querySelector("h1");
  const HR = document.querySelector("hr");
  const ADD_BOOK = document.querySelector("#addBook");
  const DELETE_BUTTONS = document.querySelector("#deleteButtonContainer");

  ADD_BOOK.style.display = "block";
  HEADER.textContent = "Reading List";
  HEADER.style.color = "#32e1c1";
  HR.style.backgroundColor = "#32e1c1";
  DELETE_BUTTONS.parentNode.removeChild(DELETE_BUTTONS);

  renderBooks();
}

export { cancelDeleteHandler };
