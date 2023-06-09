import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
 
  myFavorites$ = this.favoriteService.myFavorites$
  
  constructor(private favoriteService: FavoritesService) {}
  
}
