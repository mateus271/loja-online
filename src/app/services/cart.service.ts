import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces/product.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemsInCart$: Subject<number> = new Subject<number>();

  private idsOfProductsInCart: number[] = [];

  constructor() { }

  public addProductIdToCart(id: number): boolean {
    if (this.getProductInArrayById(id)) {
      return false;
    } else {
      this.idsOfProductsInCart.push(id);
      this.itemsInCart$.next(this.idsOfProductsInCart.length);
      return true;
    }
  }

  public getProductsInCart(): number[] {
    return this.idsOfProductsInCart;
  }

  public removeItemFromCart(id: number): boolean {
    const itemIndexInArray = this.idsOfProductsInCart.findIndex((productId) => productId === id);

    if (itemIndexInArray >= 0) {
      this.idsOfProductsInCart.splice(itemIndexInArray, 1);
      this.itemsInCart$.next(this.idsOfProductsInCart.length);
      return true;
    } else {
      return false;
    }
  }

  private getProductInArrayById(id: number) {
    return this.idsOfProductsInCart.find((productId) => productId === id);
  }
}
