import { books } from "../logic/books/bookStore.js";

let count = 0;

function renderBooks() {
  const MAIN = document.querySelector("main");
  const BOOK_CONTAINER = document.createElement("div");

  BOOK_CONTAINER.setAttribute("id", "bookContainer");

  MAIN.append(BOOK_CONTAINER);

  books.forEach((e) => {
    const BOOK = document.createElement("div");
    const BOOK_INFO = document.createElement("ol");
    const BOOK_BUTTON_CONTAINER = document.createElement("div");
    const EDIT = document.createElement("img");
    const DELETE = document.createElement("img");
    const TITLE_CONTAINER = document.createElement("li");
    const AUTHOR_CONTAINER = document.createElement("li");
    const PAGES_CONTAINER = document.createElement("li");
    const READ_CONTAINER = document.createElement("li");
    const TITLE = document.createElement("div");
    const AUTHOR = document.createElement("div");
    const PAGES = document.createElement("div");
    const READ = document.createElement("div");
    const TITLE_LABEL = document.createElement("div");
    const AUTHOR_LABEL = document.createElement("div");
    const PAGES_LABEL = document.createElement("div");
    const READ_LABEL = document.createElement("div");

    BOOK.setAttribute("class", "book");
    BOOK.setAttribute("id", count);
    BOOK_BUTTON_CONTAINER.setAttribute("class", "bookButtonContainer");
    TITLE_CONTAINER.setAttribute("class", "infoContainer");
    AUTHOR_CONTAINER.setAttribute("class", "infoContainer");
    PAGES_CONTAINER.setAttribute("class", "infoContainer");
    READ_CONTAINER.setAttribute("class", "infoContainer");
    TITLE.setAttribute("class", "bookTitle");
    AUTHOR.setAttribute("class", "bookAuthor");
    PAGES.setAttribute("class", "bookPages");
    READ.setAttribute("class", "bookRead");
    EDIT.setAttribute("src", "../../img/edit.png");
    EDIT.setAttribute("class", "editIcon");
    DELETE.setAttribute("src", "../../img/delete.png");
    DELETE.setAttribute("class", "deleteIcon");

    TITLE.textContent = e.title;
    AUTHOR.textContent = e.author;
    PAGES.textContent = e.pages;
    if (e.read === true) {
      READ.textContent = "yes";
    } else {
      READ.textContent = "no";
    }
    TITLE_LABEL.textContent = "Title:";
    AUTHOR_LABEL.textContent = "Author:";
    PAGES_LABEL.textContent = "Pages:";
    READ_LABEL.textContent = "Complete:";

    BOOK_CONTAINER.append(BOOK);
    BOOK.append(BOOK_INFO);
    BOOK.append(BOOK_BUTTON_CONTAINER);
    BOOK_BUTTON_CONTAINER.append(EDIT);
    BOOK_BUTTON_CONTAINER.append(DELETE);
    BOOK_INFO.append(TITLE_CONTAINER);
    BOOK_INFO.append(AUTHOR_CONTAINER);
    BOOK_INFO.append(PAGES_CONTAINER);
    BOOK_INFO.append(READ_CONTAINER);
    TITLE_CONTAINER.append(TITLE_LABEL);
    TITLE_CONTAINER.append(TITLE);
    AUTHOR_CONTAINER.append(AUTHOR_LABEL);
    AUTHOR_CONTAINER.append(AUTHOR);
    PAGES_CONTAINER.append(PAGES_LABEL);
    PAGES_CONTAINER.append(PAGES);
    READ_CONTAINER.append(READ_LABEL);
    READ_CONTAINER.append(READ);

    count++;
  });
}

export { renderBooks };
