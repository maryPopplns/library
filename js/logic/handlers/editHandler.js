import { renderEdit } from "../../UI/edit.js";
import { editlistenersHandlers } from "../listeners/editListenersHandlers.js";
import { books } from "../books/bookStore.js";

function editHandler(e) {
  const BOOK_CONTAINER_CURRENT = document.querySelector("#bookContainer");
  const ADD_BOOK = document.querySelector("#addBook");
  const HEADER = document.querySelector("#header");
  const HR = document.querySelector("#horizontal_rule");
  if (BOOK_CONTAINER_CURRENT !== null) {
    BOOK_CONTAINER_CURRENT.parentNode.removeChild(BOOK_CONTAINER_CURRENT);
  }
  HEADER.textContent = "Edit Book";
  ADD_BOOK.style.display = "none";
  HEADER.style.color = "#e9fb91";
  HR.style.backgroundColor = "#e9fb91";

  renderEdit(e);

  editlistenersHandlers();
}

export { editHandler };
