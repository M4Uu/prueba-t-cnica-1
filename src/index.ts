import express from "express"
import cors from "cors"
import { createBooksRouter } from "./routes/books"
import { BookModel } from "./model/books"
import { corsMiddleware } from './middleware/cors'

export const App = (booksModel: typeof BookModel) => {
  const app = express()
  const port = process.env.PORT ?? 1234
  
  app.use(cors(corsMiddleware()))
  app.disable('x-powered-by')
  app.use(express.json())

  app.use('/books',createBooksRouter( booksModel ))
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}