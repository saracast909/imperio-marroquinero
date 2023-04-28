import { Component, OnInit } from '@angular/core';

import * as dataProducts from '../../../../data/products.json'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  allProducts: Array<any> = []

  ngOnInit(): void {
    const {data} : any = (dataProducts as any).default
    this.allProducts = data;
  }
}
