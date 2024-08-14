import { Injectable } from '@angular/core';
import {BOOKS} from '../mock-book'
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {
books:Book []= BOOKS;

  constructor() { }

  //Methode de stockage des données
  getBooks():Book[]{
    return this.books
  }
}
