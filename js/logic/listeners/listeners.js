import { addBookHandler } from "./../handlers/addBookHandler.js";
import { cancelAddBookHandler } from "./../handlers/cancelAddBookHandler.js";
import { applyAddBookHandler } from "./../handlers/applyAddBookHandler.js";

function listeners() {
  const ADD_BOOK = document.querySelector("#addBook");
  const CANCEL_ADD_BOOK = document.querySelector("#cancelAddBook");
  const APPLY_ADD_BOOK = document.querySelector("#applyAddBook");

  ADD_BOOK.addEventListener("click", addBookHandler);
  CANCEL_ADD_BOOK.addEventListener("click", cancelAddBookHandler);
  APPLY_ADD_BOOK.addEventListener("click", applyAddBookHandler);
}

export { listeners };
