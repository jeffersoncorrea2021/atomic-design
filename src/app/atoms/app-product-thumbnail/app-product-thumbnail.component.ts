import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './app-product-thumbnail.component.html',
  styleUrls: ['./app-product-thumbnail.component.css']
})
export class AppProductThumbnailComponent{
  @Input() product: any;
  constructor() { }
}
