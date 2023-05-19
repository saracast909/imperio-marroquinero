import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import * as dataProducts from '../../../../data/products.json'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  constructor(private productService: ProductService) {}

  allProducts: Array<any> = []

  ngOnInit(): void {
    const {data} : any = (dataProducts as any).default
    this.allProducts = data;
  }

  addToCart(product: any){
    return this.productService.addProduct(product)
  }
}
