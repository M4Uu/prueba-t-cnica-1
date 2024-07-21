import { Router } from "express"
import { BookController } from "../controller/books.js"
import { BookModel } from "../model/books.js"

export function createBooksRouter(booksModel: typeof BookModel) {
  const booksRouter = Router()
  const bookController = new BookController(booksModel)

  booksRouter.get('/', bookController.getBooks)
  return booksRouter
}
