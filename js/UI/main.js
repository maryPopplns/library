function main() {
  const BODY = document.body;
  const APP = document.querySelector("#app");
  const MAIN = document.createElement("main");
  const BUTTON = document.createElement("button");
  const ADD_BOOK_CONTAINER = document.createElement("ul");
  const TITLE = document.createElement("li");
  const AUTHOR = document.createElement("li");
  const PAGES = document.createElement("li");
  const READ = document.createElement("li");
  const TITLE_TEXT = document.createElement("div");
  const AUTHOR_TEXT = document.createElement("div");
  const PAGES_TEXT = document.createElement("div");
  const READ_TEXT = document.createElement("div");
  const TITLE_INPUT = document.createElement("input");
  const AUTHOR_INPUT = document.createElement("input");
  const PAGES_INPUT = document.createElement("input");
  const READ_INPUT = document.createElement("input");
  const CLASSES = [TITLE, AUTHOR, PAGES, READ];
  const IDS = ["title", "author", "pages", "read"];
  const DIVS = [TITLE_TEXT, AUTHOR_TEXT, PAGES_TEXT, READ_TEXT];
  const INPUTS = [TITLE_INPUT, AUTHOR_INPUT, PAGES_INPUT, READ_INPUT];

  // <-->

  BUTTON.setAttribute("id", "addBook");
  ADD_BOOK_CONTAINER.setAttribute("class", "addBookContainer");
  for (let i = 0; i < CLASSES.length; i++) {
    CLASSES[i].setAttribute("class", "lineItem");
    CLASSES[i].setAttribute("id", IDS[i]);
  }
  for (let i = 0; i < DIVS.length; i++) {
    DIVS[i].textContent = IDS[i];
  }
  BUTTON.textContent = "Add Book +";

  // <-->

  BODY.insertBefore(MAIN, APP);
  MAIN.append(BUTTON);
  MAIN.append(ADD_BOOK_CONTAINER);
  for (let i = 0; i < CLASSES.length; i++) {
    ADD_BOOK_CONTAINER.append(CLASSES[i]);
  }
  for (let i = 0; i < CLASSES.length; i++) {
    CLASSES[i].append(DIVS[i]);
    CLASSES[i].append(INPUTS[i]);
  }
}

export { main };
