import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  getChild!: boolean;
  
  recupValue(val:boolean){
    console.log("impecable=>", val);
    this.getChild = val
    
  }
}
