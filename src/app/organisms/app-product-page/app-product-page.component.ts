import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './app-product-page.component.html',
  styleUrls: ['./app-product-page.component.css']
})
export class AppProductPageComponent implements OnInit {
  productList = [
    { name: 'Product 1', imageUrl: '../../../assets/img/image1.jpg' },
    { name: 'Product 2', imageUrl: '../../../assets/img/image2.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
