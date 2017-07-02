import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {ProductService} from "../product-list/product.service";
import {IProduct} from "../product-list/iproduct";
import {isNullOrUndefined} from "util";

@Injectable()
export class ProductDetailGuard implements CanActivate {

  product: IProduct;
  errorMessage: string;
  canActivate(
    route: ActivatedRouteSnapshot) {

    let id = +route.url[1].path;

    if(isNaN(id) || id < 1) {
      alert('Invalid Product Id');
      this._router.navigate(['/products']);
      return false;
    }


    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any> error);

    console.log('santosh:' + JSON.stringify(this.product));
    if(this.product == null) {
      alert('product not found');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

  constructor(private _router: Router, private _productService: ProductService) {

  }
}
