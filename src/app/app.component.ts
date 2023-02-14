import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coding-assignments';
  activeTab: number = 1;
  
  constructor(private service: ProductService) { }

  switchTab(tab: number): void {
    this.activeTab = tab;
  }

  cartTotal(): number {
    return this.service.getCartTotal();
  }

  ngOnInit(): void {
    
  }
}
