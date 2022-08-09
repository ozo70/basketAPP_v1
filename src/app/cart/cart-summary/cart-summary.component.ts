import { Component, OnInit,DoCheck } from '@angular/core';
import { CartService } from "../service/cart.service";
import { CartItem } from "../cart-item";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit,DoCheck {

  constructor(private cartService: CartService) { }

  public totalCartItem: number ;
  public totalCartItemPrice: number ;
  public cartItems: CartItem[] ;

  ngOnInit(): void {
    this.cartItems = this.cartService.list();
  }

  ngDoCheck(){
    this.totalCartItem = this.cartService.list().reduce((a,b) =>a+b.quantity,0);

    this.totalCartItemPrice = this.cartService.list().reduce((a,b) =>a+b.quantity*b.product.unitPrice,0 );

    console.log(this.cartItems);
  }

}
