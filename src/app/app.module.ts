import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/service/cart.service';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { FilterPipe } from './product/pipe/filter.pipe';
import { KdvPipe } from './product/pipe/kdv.pipe';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    FilterPipe,
    KdvPipe,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide:<string> 'apiUrl',
      useValue:<string> "https://northwind.vercel.app/api"
    },CartService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
