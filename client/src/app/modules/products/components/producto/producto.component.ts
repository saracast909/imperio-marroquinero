import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

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
    private productService:ProductService
  ){
    this.ruta.params.subscribe(params=>{
      this.product = this.productService.obtenerProducto(params['id'])
    })

    this.img = this.product.image;
  }




}
