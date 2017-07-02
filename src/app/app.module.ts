import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductFilterPipe } from './product-list/product-filter.pipe';
import { StarComponent } from './star/star.component';
import {ProductService} from "./product-list/product.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail/product-detail.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'product/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path:'**', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  providers: [ProductService, ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
