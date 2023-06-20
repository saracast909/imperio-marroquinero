import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
 
  allProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.allProducts = this.productService.obtenerProductos()
  }
}
