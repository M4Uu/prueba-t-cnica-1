"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooksRouter = createBooksRouter;
const express_1 = require("express");
const books_js_1 = require("../controller/books.js");
function createBooksRouter(booksModel) {
    const booksRouter = (0, express_1.Router)();
    const bookController = new books_js_1.BookController(booksModel);
    booksRouter.get('/', bookController.getBooks);
    return booksRouter;
}
