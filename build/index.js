"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_1 = require("./routes/books");
const cors_2 = require("./middleware/cors");
const App = (booksModel) => {
    var _a;
    const app = (0, express_1.default)();
    const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1234;
    app.use((0, cors_1.default)((0, cors_2.corsMiddleware)()));
    app.disable('x-powered-by');
    app.use(express_1.default.json());
    app.use('/books', (0, books_1.createBooksRouter)(booksModel));
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};
exports.App = App;
