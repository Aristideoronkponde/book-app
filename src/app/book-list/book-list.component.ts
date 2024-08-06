import { style } from '@angular/animations';
import { Component } from '@angular/core';

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
export class BookListComponent {
  name : string ="Aristide";
  
  books=[
    {id:1, title:"Zero bogue", author:"kate", status:"encour"},
    {id:2, title:"Clean Code", author:"Robert", status:"encour"},
    {id:3, title:"Le programmeur pragmatique", author:"kate", status:"encour"},
  ]
}
