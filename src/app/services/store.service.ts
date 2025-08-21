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

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  public findProductById(id: number): Product | undefined {
    if (this.products.length > 0) {
      return this.products.find(product => product.id === id);
    } else {
      return undefined;
    }
  }
}
