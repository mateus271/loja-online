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
    if (this.idsOfProductsInCart.find((productId) => productId === id)) {
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
}
