import { BookModel } from "../model/books"
import { Request, Response } from "express"

export class BookController{
  private bookModel : typeof BookModel
  constructor(bookModel : typeof BookModel){
    this.bookModel = bookModel
  }
  getBooks = async(_req : Request, res : Response) => 
    res.status(200).json((await this.bookModel.getBooks()))
}