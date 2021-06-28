function addBookHandler(e) {
  e.preventDefault();

  const BOOK_CONTAINER = document.querySelector("#bookContainer");
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");

  ADD_BOOK_CONTAINER.style.display = "block";
  ADD_BOOK.style.display = "none";

  if (BOOK_CONTAINER !== null) {
    BOOK_CONTAINER.parentNode.removeChild(BOOK_CONTAINER);
  }
}

export { addBookHandler };
