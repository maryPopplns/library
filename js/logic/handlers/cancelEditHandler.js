import { renderBooks } from "../../UI/books.js";

function cancelEditHandler(e) {
  e.preventDefault();
  const HEADER = document.querySelector("h1");
  const HR = document.querySelector("hr");
  const ADD_BOOK = document.querySelector("#addBook");
  const EDIT_FORM = document.querySelector(".editForm");

  HEADER.style.color = "#32e1c1";
  HEADER.textContent = "Reading List";
  HR.style.backgroundColor = "#32e1c1";
  ADD_BOOK.style.display = "block";
  EDIT_FORM.parentNode.removeChild(EDIT_FORM);

  renderBooks();
}

export { cancelEditHandler };
