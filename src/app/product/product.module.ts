import { NgModule } from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {ProductFilterPipe} from "../product-list/product-filter.pipe";
import {HttpModule} from "@angular/http";
import {ProductDetailGuard} from "../product-detail/product-detail.guard";
import {ProductService} from "../product-list/product.service";
import {SharedModule} from "../shared/shared.module";
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule { }
