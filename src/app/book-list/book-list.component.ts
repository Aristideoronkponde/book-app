import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ServiceBooksService } from '../service-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
// @Component({
//   selector: 'app-book-list',
//   template: `<nav>
//     <ul>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>`,
//   styles: `nav{background-color:aqua;
//     color:blue;}
//     li{
//       list-style:none;
//     }`,
// })
export class BookListComponent implements OnInit {
  name : string ="Aristide";
  books?:Book[]

  constructor(private BooksService : ServiceBooksService){}

  ngOnInit():void{
    this.books=this.BooksService.getBooks()
    
    
  }
}
