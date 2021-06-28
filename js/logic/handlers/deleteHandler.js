import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";

function deleteHandler(event) {
  for (let i = 0; i < books.length; i++) {
    if (+event.target.id === books[i].count) {
      books.splice(i, 1);
      break;
    }
  }

  renderBooks();
}

export { deleteHandler };
