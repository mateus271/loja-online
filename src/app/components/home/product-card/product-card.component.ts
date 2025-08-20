import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input()
  productsArray: Product[] = [];

  @Output()
  productSelected: EventEmitter<number> = new EventEmitter<number>();

  public selectProduct(productId: number): void {
    this.productSelected.emit(productId);
  }
}
