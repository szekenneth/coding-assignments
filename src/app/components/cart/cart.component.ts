import { Component, Input, OnInit, Pipe } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart: Array<Product> = [];

  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.productsCart = this.service.getProductsCart();
  }

  removeFromCart(product: Product): void {
    this.service.removeFromCart(product);
  }
}
