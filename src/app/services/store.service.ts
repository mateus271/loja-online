import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [];

  private apiUrl: string = "https://fakestoreapi.com/products";

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  public findProductById(id: number): Product | undefined {
    if (this.products.length > 0) {
      return this.products.find(product => product.id === id);
    } else {
      return undefined;
    }
  }
}
