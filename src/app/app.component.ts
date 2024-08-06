// composant principale

import { Component } from '@angular/core';
//@compnent est un decorateur il est une fonction qui permet d'ajouter des metadonner a une classe
@Component({
  selector: 'app-root',//nom du composant c'est avec ce nom quon peut l'appeler
  templateUrl: './app.component.html',//
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-app';
  name ='de la famille';
}
