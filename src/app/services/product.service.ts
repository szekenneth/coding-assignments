import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  productsAll: Array<Product> = [];
  productsCart: Array<Product> = [];
  cartTotal: number = 0;

  constructor(private http: HttpClient) { }

  getProductsAll(): Array<Product> {
    if (this.productsAll.length === 0) {
      try {
        this.http.get('../../assets/products.json').forEach(data => {
          if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
              let row = data[i] as Product;
              if (!row.inCart) {
                row.inCart = 0;
              }
              this.productsAll.push(row);
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
    return this.productsAll;
  }

  getProductsCart(): Array<Product> {
    return this.productsCart;
  }

  getCartTotal(): number {
    return this.cartTotal;
  }

  addToCart(p: Product): void {
    const index = this.productsCart.findIndex(product => product.id === p.id);
    if (index > -1) {
      this.productsCart[index].inCart += 1;
    } else {
      p.inCart = 1;
      this.productsCart.push(p);
    }
    this.cartTotal += 1;
  }

  removeFromCart(p: Product): void {
    const index = this.productsCart.findIndex(product => product.id === p.id);
    if (p.inCart === 1) {
      this.productsCart.splice(index, 1);
      this.cartTotal -= 1;
    } else if (index > -1 && this.productsCart[index].inCart > 0) {
      this.productsCart[index].inCart -= 1;
      this.cartTotal -= 1;
    }
  }
}