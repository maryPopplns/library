function main() {
  const BODY = document.body;
  const APP = document.querySelector("#app");
  const MAIN = document.createElement("main");
  const BUTTON = document.createElement("button");
  const ADD_BOOK_CONTAINER = document.createElement("form");
  const TITLE = document.createElement("div");
  const AUTHOR = document.createElement("div");
  const PAGES = document.createElement("div");
  const READ = document.createElement("div");
  const TITLE_TEXT = document.createElement("label");
  const AUTHOR_TEXT = document.createElement("label");
  const PAGES_TEXT = document.createElement("label");
  const READ_TEXT = document.createElement("label");
  const TITLE_INPUT = document.createElement("input");
  const AUTHOR_INPUT = document.createElement("input");
  const PAGES_INPUT = document.createElement("input");
  const READ_INPUT = document.createElement("input");
  const CANCEL_ADD_BOOK = document.createElement("button");
  const APPLY_ADD_BOOK = document.createElement("button");
  const ADD_BOOK_BUTTON_CONTAINER = document.createElement("div");
  const INPUT_CONTAINERS = [TITLE, AUTHOR, PAGES, READ];
  const IDS = ["title", "author", "pages", "read"];
  const LABELS = [TITLE_TEXT, AUTHOR_TEXT, PAGES_TEXT, READ_TEXT];
  const INPUTS = [TITLE_INPUT, AUTHOR_INPUT, PAGES_INPUT, READ_INPUT];

  // <-->

  BUTTON.setAttribute("id", "addBook");
  ADD_BOOK_CONTAINER.setAttribute("class", "addBookContainer");
  for (let i = 0; i < INPUT_CONTAINERS.length; i++) {
    INPUT_CONTAINERS[i].setAttribute("class", "lineItem");
    INPUT_CONTAINERS[i].setAttribute("id", IDS[i]);
    INPUTS[i].setAttribute("name", IDS[i]);
    LABELS[i].setAttribute("for", IDS[i]);
    if (IDS[i] === "read") {
      INPUTS[i].setAttribute("type", "checkbox");
    } else {
      INPUTS[i].setAttribute("type", "text");
    }
  }
  for (let i = 0; i < LABELS.length; i++) {
    LABELS[i].textContent = IDS[i];
  }
  BUTTON.textContent = "Add Book +";
  ADD_BOOK_BUTTON_CONTAINER.setAttribute("class", "addBookButtonContainer");
  CANCEL_ADD_BOOK.setAttribute("class", "addBookButtons");
  CANCEL_ADD_BOOK.setAttribute("id", "cancelAddBook");
  APPLY_ADD_BOOK.setAttribute("class", "addBookButtons");
  APPLY_ADD_BOOK.setAttribute("id", "applyAddBook");
  CANCEL_ADD_BOOK.textContent = "Cancel";
  APPLY_ADD_BOOK.textContent = "Apply";

  // <-->

  BODY.insertBefore(MAIN, APP);
  MAIN.append(BUTTON);
  MAIN.append(ADD_BOOK_CONTAINER);
  for (let i = 0; i < INPUT_CONTAINERS.length; i++) {
    ADD_BOOK_CONTAINER.append(INPUT_CONTAINERS[i]);
  }
  for (let i = 0; i < INPUT_CONTAINERS.length; i++) {
    INPUT_CONTAINERS[i].append(LABELS[i]);
    INPUT_CONTAINERS[i].append(INPUTS[i]);
  }

  ADD_BOOK_CONTAINER.append(ADD_BOOK_BUTTON_CONTAINER);
  ADD_BOOK_BUTTON_CONTAINER.append(CANCEL_ADD_BOOK);
  ADD_BOOK_BUTTON_CONTAINER.append(APPLY_ADD_BOOK);
}

export { main };
