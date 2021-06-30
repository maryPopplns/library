import { books } from "./logic/books/bookStore.js";

function localStorage() {
  window.localStorage.setItem("books", JSON.stringify(books));
  const storage = window.localStorage.getItem("books");
  console.log(storage);
}

export { localStorage };
