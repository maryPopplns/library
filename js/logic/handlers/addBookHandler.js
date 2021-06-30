import { books } from "../books/bookStore.js";

function addBookHandler(e) {
  e.preventDefault();

  console.log(JSON.stringify(books));

  const HEADER = document.querySelector("#header");
  const HR = document.querySelector("hr");
  const BOOK_CONTAINER = document.querySelector("#bookContainer");
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");

  ADD_BOOK_CONTAINER.style.display = "block";
  ADD_BOOK.style.display = "none";
  HEADER.textContent = "Add Book";
  HEADER.style.color = "#01b7ee";
  HR.style.backgroundColor = "#01b7ee";

  if (BOOK_CONTAINER !== null) {
    BOOK_CONTAINER.parentNode.removeChild(BOOK_CONTAINER);
  }
}

export { addBookHandler };
