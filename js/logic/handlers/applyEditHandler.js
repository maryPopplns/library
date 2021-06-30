import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";
import { localStorage } from "../../localStorage.js";

function applyEditHandler(e) {
  e.preventDefault();

  const HEADER = document.querySelector("h1");
  const HR = document.querySelector("hr");
  const TITLE_EDIT = document.querySelector("#editTitleInput");
  const AUTHOR_EDIT = document.querySelector("#editAuthorInput");
  const PAGES_EDIT = document.querySelector("#editPagesInput");
  const READ_EDIT = document.querySelector("#editReadInput");
  const COUNT = TITLE_EDIT.getAttribute("data-count");
  const EDIT_FORM = document.querySelector(".editForm");
  const ADD_BOOK = document.querySelector("#addBook");

  for (let i = 0; i < books.length; i++) {
    if (books[i].count === +COUNT) {
      books[i].title = TITLE_EDIT.value;
      books[i].author = AUTHOR_EDIT.value;
      books[i].pages = PAGES_EDIT.value;
      books[i].read = READ_EDIT.checked;
    }
  }
  HEADER.style.color = "#32e1c1";
  HEADER.textContent = "Reading List";
  HR.style.backgroundColor = "#32e1c1";
  ADD_BOOK.style.display = "block";

  EDIT_FORM.parentNode.removeChild(EDIT_FORM);

  renderBooks();
  localStorage();
}

export { applyEditHandler };
