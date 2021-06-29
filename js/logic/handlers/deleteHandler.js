import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";
import { renderDeletePage } from "../../UI/delete.js";
import { deleteListenersHandlers } from "../listeners/deleteListenersHandlers.js";

function deleteHandler(event) {
  // for (let i = 0; i < books.length; i++) {
  //   if (+e.target.id === books[i].count) {
  //     books.splice(i, 1);
  //     break;
  //   }
  // }
  renderDeletePage(event);
  deleteListenersHandlers(event);
  // renderBooks();
}

export { deleteHandler };
