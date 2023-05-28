import { Injectable} from '@angular/core';
import * as dataProducts from '../data/products.json';

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  allProducts: Array<any> = []

  obtenerProductos(){
    const { data }: any = (dataProducts as any).default
    this.allProducts = data;

    return this.allProducts
  }

  obtenerProducto(i: number){
    return this.allProducts[i];
  }
}
