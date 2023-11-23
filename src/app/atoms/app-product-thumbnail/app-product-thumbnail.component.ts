import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './app-product-thumbnail.component.html',
  styleUrls: ['./app-product-thumbnail.component.css']
})
export class AppProductThumbnailComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
