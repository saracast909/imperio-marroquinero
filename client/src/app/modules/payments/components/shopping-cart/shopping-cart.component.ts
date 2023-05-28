import { Component, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();

  onCloseCart() {
    this.closeCart.emit();
  }

  myCart$ = this.cartService.myCart$
  
  constructor(private cartService: CartService) {}
  
  totalProduct(price: number, units: number){
    return price * units
  }

  delete(id:number){
    this.cartService.delete(id)
  }

  update(operation:string, id:number){
    const product = this.cartService.findproduct(id)

    if(product){
      if(operation === 'minus' && product.cantidad > 0){
        product.cantidad = product.cantidad - 1;
      }
      if(operation === 'add'){
        product.cantidad = product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.delete(id)
      }
    }
  }

  totalcart(){
    const result = this.cartService.totalcart()
    return result
  }

  totalproducts(){
    const result = this.cartService.totalproducts()
    return result
  }
}
