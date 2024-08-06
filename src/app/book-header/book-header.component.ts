import { Component, EventEmitter ,Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.css'
})
export class BookHeaderComponent {
logo:string="../../assets/4190_1920x1200.jpg";

@Output()passValue = new EventEmitter<boolean>();//emit evenement est passvalue et type d'evenement quon veut passer 
affiche:boolean = false;
 
afficheForm(){
  this.affiche= !this.affiche 
  this.passValue.emit(this.affiche)
}


}
