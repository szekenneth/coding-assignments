import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Array<Product> = [];

  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.productsList = this.service.getProductsAll();
  }

  addToCart(product: Product): void {
    this.service.addToCart(product);
  }
}