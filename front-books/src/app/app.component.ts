import { Component, effect, inject, Injector, signal } from '@angular/core';
import { GetBooksService } from './api-books/get-books.service';
import { Query } from './api-books/books.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'front-books';

  booksService = inject(GetBooksService)
  booksFilter: Query[] = []
  books: Query[] = []
  cart: Query[] = []

  genres: string[] = ['Todos','Fantasía','Ciencia ficción','Zombies','Terror']
  genreSelect: string = 'Todos'

  pages = signal(800)

  constructor(private injector: Injector){}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe( (stream: Query[]) =>
      this.books = stream
    )
    this.booksFilter = this.books
  }

  showMenu = false

  toggleMenu = () => this.showMenu = !this.showMenu

  genreClick(genre: string) {
    this.filter(genre)
    this.toggleMenu()
  }

  filter(genre: string) {
    this.genreSelect = genre
    effect(() => {
      if(this.genreSelect !== 'Todos'){
        this.booksFilter = this.books.filter(item => item.book.genre === this.genreSelect)
        this.booksFilter = this.booksFilter.filter(item => item.book.pages <= this.pages())
      }else{
        this.booksFilter = this.books
        this.booksFilter = this.booksFilter.filter(item => item.book.pages <= this.pages())
      }
    },{injector: this.injector})
  }

  addToCart(book : Query, isbn : string) {
    this.cart.push(book)
    const index = this.books.findIndex(item => item.book.ISBN === isbn)
    this.books.splice(index,1)
  }

  spliceToCart(book : Query, isbn : string) {
    this.books.push(book)
    const index = this.cart.findIndex(item => item.book.ISBN === isbn)
    this.cart.splice(index,1)
  }
}
