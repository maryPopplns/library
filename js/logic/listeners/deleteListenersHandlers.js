import { cancelDeleteHandler } from "../handlers/cancelDeleteHandler.js";
import { applyDeleteHandler } from "../handlers/applyDeleteHandler.js";

function deleteListenersHandlers(event) {
  console.log(event);
  const CANCEL_DELETE = document.querySelector("#cancelDelete");
  const APPLY_DELETE = document.querySelector("#applyDelete");

  CANCEL_DELETE.addEventListener("click", cancelDeleteHandler);
  APPLY_DELETE.addEventListener("click", applyDeleteHandler);
}

export { deleteListenersHandlers };
