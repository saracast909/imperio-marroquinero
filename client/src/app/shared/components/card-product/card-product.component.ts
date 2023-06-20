import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

  @Input() product : any;
  @Input() i : any;
  
  constructor(private cartService: CartService, private favoriteService: FavoritesService) {}

  addToCart(product: any){
    return this.cartService.addProduct(product)
  }

  addToFavorite(product: any){
    return this.favoriteService.addFavorite(product)
  }

}
