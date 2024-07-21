import books from '../books.json'

export class BookModel{
  static async getBooks() { return books.library }
}