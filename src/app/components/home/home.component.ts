import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public productsArray: Product[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getProducts().subscribe({
      next: (products) => {
        this.productsArray = products
      },
      error: (err) => {
        console.log("Erro!")
      }
    });
  }

  public productSelected(event: number): void {
    console.log("Produto clicado", event);
  }
}
