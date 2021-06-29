function renderDeletePage(event) {
  const HEADER = document.querySelector("h1");
  const HR = document.querySelector("hr");
  const MAIN = document.querySelector("main");
  const BOOK_CONTAINER = document.querySelector("#bookContainer");
  const ADD_BOOK = document.querySelector("#addBook");
  const BUTTON_CONTAINER = document.createElement("div");
  const CANCEL_DELETE = document.createElement("button");
  const APPLY_DELETE = document.createElement("button");

  BOOK_CONTAINER.parentNode.removeChild(BOOK_CONTAINER);
  HEADER.textContent = "Delete";
  HEADER.style.color = "#cb353f";
  HR.style.backgroundColor = "#cb353f";
  ADD_BOOK.style.display = "none";
  BUTTON_CONTAINER.setAttribute("id", "deleteButtonContainer");
  CANCEL_DELETE.setAttribute("id", "cancelDelete");
  CANCEL_DELETE.setAttribute("class", "deleteBookButtons");
  CANCEL_DELETE.textContent = "Cancel";
  APPLY_DELETE.setAttribute("id", "applyDelete");
  APPLY_DELETE.setAttribute("class", "deleteBookButtons");
  APPLY_DELETE.textContent = "Delete";

  MAIN.append(BUTTON_CONTAINER);
  BUTTON_CONTAINER.append(CANCEL_DELETE);
  BUTTON_CONTAINER.append(APPLY_DELETE);
}

export { renderDeletePage };
