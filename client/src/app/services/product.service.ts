import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myList: any[] = [];

  private myCart = new BehaviorSubject<any>([])
  myCart$ = this.myCart.asObservable();
  constructor() { }

  addProduct(product: any){

    if(this.myList.length === 0){
      product.cantidad = 1
      this.myList.push(product)
      this.myCart.next(this.myList)
    }
    else {
      const productMod = this.myList.find((element)=>{
        return element.id == product.id
      })
      if(productMod){
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList)
      } else {
        product.cantidad = 1;
        this.myList.push(product)
        this.myCart.next(this.myList)
      }
    }
    
  }

  delete(id:number){
    this.myList = this.myList.filter((product)=>{
      return product.id != id
    })
    this.myCart.next(this.myList)
  }

  findproduct(id: number){
    return this.myList.find((element)=>{
      return element.id === id
    })
  }

  totalcart(){
    const total = this.myList.reduce(function (acc, product){
      return acc + (product.cantidad * product.precio);
    }, 0)
    return total
  }
}
