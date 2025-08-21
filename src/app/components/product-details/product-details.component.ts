import { CartService } from './../../services/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/store.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  public productId: number = 0;
  public selectedProduct: Product | undefined = undefined;

  private snackBar = inject(MatSnackBar);
  private productAddedSuccessfuly: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get("id") ?? "0");

    this.selectedProduct = this.productService.findProductById(this.productId);
  }

  public addProductToCart(id: number | undefined): void {
    if (id) {
      this.productAddedSuccessfuly = this.cartService.addProductIdToCart(id);
    }

    this.openSnackBar();

    this.router.navigate(['home']);
  }

  openSnackBar() {
    if (this.productAddedSuccessfuly) {
      this.snackBar.open("Produto adicionado com sucesso ao carrinho!", "Ok");
    } else {
      this.snackBar.open("O produto já estava no seu carrinho!", "Ok");
    }
  }
}
