import { header } from "./UI/header.js";
import { main } from "./UI/main.js";
import { listeners } from "./logic/listeners/listeners.js";
import { renderBooks } from "./UI/books.js";

header();
main();
renderBooks();
listeners();
