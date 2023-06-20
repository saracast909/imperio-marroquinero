import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private myFavoritesList: any[] = [];

  private myFavorites = new BehaviorSubject<any>([])
  myFavorites$ = this.myFavorites.asObservable();

  addFavorite(product:any){
    if(product.favorite == true){
      this.myFavoritesList.push(product)
      this.myFavorites.next(this.myFavoritesList)
    }
    else{
      this.myFavoritesList = this.myFavoritesList.filter((product)=>{
        return product.favorite != false
      })
      this.myFavorites.next(this.myFavoritesList)
    }
  }
 
}
