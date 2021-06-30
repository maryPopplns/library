const LOCAL_STORAGE = window.localStorage.getItem("books");
let books;
if (LOCAL_STORAGE !== null) {
  books = JSON.parse(LOCAL_STORAGE);
} else {
  books = [];
}

export { books };
