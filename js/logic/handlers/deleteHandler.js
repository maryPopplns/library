import { books } from "../books/bookStore.js";
import { renderBooks } from "../../UI/books.js";
import { renderDeletePage } from "../../UI/delete.js";
import { deleteListenersHandlers } from "../listeners/deleteListenersHandlers.js";

function deleteHandler(event) {
  renderDeletePage(event);
  deleteListenersHandlers(event);
}

export { deleteHandler };
