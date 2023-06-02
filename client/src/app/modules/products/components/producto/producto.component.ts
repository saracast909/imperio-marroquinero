import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  
  product: any = {}
  img: string = ''


  constructor(
    private ruta:ActivatedRoute,
    private productService:ProductService,
    private cartService: CartService
  ){
    this.ruta.params.subscribe(params=>{
      this.product = this.productService.obtenerProducto(params['id'])
    })

    this.img = this.product.image;
  }

  addToCart(product: any){
    return this.cartService.addProduct(product)
  }

  enviarMail(producto: string){
    alert('Se le informara cuando el producto ' + producto + ' este disponible.')
  }
}
