import { books } from "./logic/books/bookStore.js";

function localStorage() {
  window.localStorage.setItem("books", JSON.stringify(books));
}

export { localStorage };
