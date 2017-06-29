import { Component, OnInit } from '@angular/core';
import {IProduct} from "./iproduct";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth:  25;
  imageMargin: 2;
  showImage = false;
  listFilter: string;
  errorMessage: string;

  products: IProduct[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = <any> error);

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
      this.pageTitle = 'Product List:' + message;
  }
}
