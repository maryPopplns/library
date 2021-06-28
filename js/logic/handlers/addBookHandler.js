function addBookHandler(e) {
  e.preventDefault();

  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");

  ADD_BOOK_CONTAINER.style.display = "block";
  ADD_BOOK.style.display = "none";
}

export { addBookHandler };
