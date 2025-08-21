import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/store.service';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public productsArray: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    if (this.productService.products.length === 0) {
      this.getProductsFromApi();
    } else {
      this.productsArray = this.productService.products;
    }
  }

  private getProductsFromApi(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.productService.products = this.productsArray = products;
      },
      error: (err) => {
        console.log("Erro!");
      }
    });
  }

  public productSelected(event: number): void {
    this.router.navigate(['/product-details/', event]);
  }
}
