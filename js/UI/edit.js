import { books } from "../logic/books/bookStore.js";

function renderEdit(e) {
  const BOOK_INSTANCE = books
    .filter((book) => book.count === +e.target.id)
    .pop();
  const MAIN = document.querySelector("main");
  const EDIT_FORM = document.createElement("form");
  const TITLE_CONTAINER = document.createElement("div");
  const AUTHOR_CONTAINER = document.createElement("div");
  const PAGES_CONTAINER = document.createElement("div");
  const READ_CONTAINER = document.createElement("div");
  const TITLE_LABEL = document.createElement("label");
  const AUTHOR_LABEL = document.createElement("label");
  const PAGES_LABEL = document.createElement("label");
  const READ_LABEL = document.createElement("label");
  const TITLE_INPUT = document.createElement("input");
  const AUTHOR_INPUT = document.createElement("input");
  const PAGES_INPUT = document.createElement("input");
  const READ_INPUT = document.createElement("input");
  const BUTTON_CONTAINER = document.createElement("div");
  const CANCEL_EDIT_BOOK = document.createElement("button");
  const APPLY_EDIT_BOOK = document.createElement("button");
  const CONTAINERS = [
    TITLE_CONTAINER,
    AUTHOR_CONTAINER,
    PAGES_CONTAINER,
    READ_CONTAINER,
  ];
  const LABELS = [TITLE_LABEL, AUTHOR_LABEL, PAGES_LABEL, READ_LABEL];
  const INPUTS = [TITLE_INPUT, AUTHOR_INPUT, PAGES_INPUT, READ_INPUT];
  const CONTAINER_IDS = ["editTitle", "editAuthor", "editPages", "editRead"];
  const LABEL_IDS = [
    "editTitleLabel",
    "editAuthorLabel",
    "editPagesLabel",
    "editReadLabel",
  ];
  const INPUT_IDS = [
    "editTitleInput",
    "editAuthorInput",
    "editPagesInput",
    "editReadInput",
  ];
  const ITEMS = ["title", "author", "pages", "complete"];

  EDIT_FORM.setAttribute("class", "editForm");
  for (let i = 0; i < CONTAINERS.length; i++) {
    CONTAINERS[i].setAttribute("class", "editItem");
    CONTAINERS[i].setAttribute("id", CONTAINER_IDS[i]);
    LABELS[i].setAttribute("for", CONTAINER_IDS[i]);
    LABELS[i].setAttribute("class", "editLabelText");
    LABELS[i].setAttribute("id", LABEL_IDS[i]);
    INPUTS[i].setAttribute("name", CONTAINER_IDS[i]);
    INPUTS[i].setAttribute("id", INPUT_IDS[i]);
    if (INPUT_IDS[i] === "editReadInput") {
      INPUTS[i].setAttribute("type", "checkbox");
    } else {
      INPUTS[i].setAttribute("type", "text");
    }
    LABELS[i].textContent = ITEMS[i];
  }
  TITLE_INPUT.setAttribute("data-count", BOOK_INSTANCE.count);
  BUTTON_CONTAINER.setAttribute("class", "editBookButtonContainer");
  CANCEL_EDIT_BOOK.setAttribute("class", "editBookButton");
  CANCEL_EDIT_BOOK.setAttribute("id", "cancelEditBook");
  APPLY_EDIT_BOOK.setAttribute("class", "editBookButton");
  APPLY_EDIT_BOOK.setAttribute("id", "applyEditBook");
  CANCEL_EDIT_BOOK.textContent = "Cancel";
  APPLY_EDIT_BOOK.textContent = "Apply";
  TITLE_INPUT.value = BOOK_INSTANCE.title;
  AUTHOR_INPUT.value = BOOK_INSTANCE.author;
  PAGES_INPUT.value = BOOK_INSTANCE.pages;
  READ_INPUT.checked = BOOK_INSTANCE.read;

  MAIN.append(EDIT_FORM);
  for (let i = 0; i < CONTAINERS.length; i++) {
    EDIT_FORM.append(CONTAINERS[i]);
    CONTAINERS[i].append(LABELS[i]);
    CONTAINERS[i].append(INPUTS[i]);
  }
  EDIT_FORM.append(BUTTON_CONTAINER);
  BUTTON_CONTAINER.append(CANCEL_EDIT_BOOK);
  BUTTON_CONTAINER.append(APPLY_EDIT_BOOK);
}

export { renderEdit };
