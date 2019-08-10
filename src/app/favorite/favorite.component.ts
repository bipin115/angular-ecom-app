import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  title = 'Angular4-Ecom-App';
  isFavorite:boolean;
  constructor() { }

  ngOnInit() {

  }
  onClick(){
    this.isFavorite=!this.isFavorite;
  }
}
