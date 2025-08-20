import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  public searchValue: string = "";
  public itemsInCart: number = 0;
  public isBadgeHidden: boolean = true;

  private cartSubscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.itemsInCart$.subscribe(quantityOfItemsInCart => {
      this.itemsInCart = quantityOfItemsInCart;

      if (this.itemsInCart > 0) {
        this.isBadgeHidden = false;
      } else {
        this.isBadgeHidden = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  public handleKeydown($event: Event) {
    setTimeout(() => {
      // this.shopService.changeSearchParam(($event.target as HTMLInputElement).value);
    }, 200)
  }
}
