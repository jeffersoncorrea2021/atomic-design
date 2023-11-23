import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent {
  @Input() products: any[];
  constructor() { 
    this.products=[];
  }
}
