import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";
// import { count } from "../../UI/books.js";

function cancelAddBookHandler(e) {
  e.preventDefault();

  const ADD_BOOK_CONTAINER = document.querySelector(".addBookContainer");
  const ADD_BOOK = document.querySelector("#addBook");
  ADD_BOOK_CONTAINER.style.display = "none";
  ADD_BOOK.style.display = "block";

  document.querySelector("#titleInput").value = "";
  document.querySelector("#authorInput").value = "";
  document.querySelector("#pagesInput").value = "";
  document.querySelector("#readInput").checked = false;

  console.log(books);
  console.log(count);

  renderBooks();
}

export { cancelAddBookHandler };
