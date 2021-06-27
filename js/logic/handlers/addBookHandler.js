function addBookHandler(e) {
  e.preventDefault();
  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  ADD_BOOK_CONTAINER.style.display = "block";
}

export { addBookHandler };
