import { cancelEditHandler } from "../handlers/cancelEditHandler.js";
import { applyEditHandler } from "../handlers/applyEditHandler.js";

function editlistenersHandlers() {
  const CANCEL = document.querySelector("#cancelEditBook");
  const APPLY = document.querySelector("#applyEditBook");

  CANCEL.addEventListener("click", cancelEditHandler);
  APPLY.addEventListener("click", applyEditHandler);
}

export { editlistenersHandlers };
