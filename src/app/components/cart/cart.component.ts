import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../shared/interfaces/product.interface';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  public productsArray: Product[] = [];
  public totalPrice: number = 0;

  private productIdsInCart: number[] = [];

  constructor(private cartService: CartService, private storeService: StoreService, private router: Router) {
  }

  ngOnInit(): void {
    this.productIdsInCart = this.cartService.getProductsInCart();

    this.findProductsToFillCart();
  }

  private findProductsToFillCart() {
    this.productIdsInCart.forEach(productId => {
      this.productsArray.push(this.storeService.findProductById(productId) ?? {} as Product);
      this.getCartTotalPrice();
    });
  }

  private getCartTotalPrice() {
    this.totalPrice = 0;

    this.productsArray.forEach(product => {
      this.totalPrice += product.price;
    });
  }

  public navigate(route: string): void {
    this.router.navigate([route]);
  }

  public removeItemFromCart(productId: number): void {
    if (this.cartService.removeItemFromCart(productId)) {
      let deletedProductIndex = this.productsArray.findIndex(product => product.id === productId);
      this.productsArray.splice(deletedProductIndex, 1);
      this.getCartTotalPrice();
    }
  }
}
