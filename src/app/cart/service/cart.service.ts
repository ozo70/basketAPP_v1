import { Injectable } from '@angular/core';
import { Product } from '../../product/product'
import { CartItem } from '../cart-item'
import { CART_ITEM_LIST } from '../cart-item-list'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems?: CartItem[];
  constructor() { }

  addToCart(product:Product){
    let addItem = CART_ITEM_LIST.find(t => t.product.id == product.id);
    if(addItem) {
      addItem.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CART_ITEM_LIST.push(cartItem);
    }

  }
  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  removeFromCart(product: Product) {
    var addedItem = CART_ITEM_LIST.find(t => t.product.id == product.id)!;
    var indexNo = CART_ITEM_LIST.indexOf(addedItem);
    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }
}
