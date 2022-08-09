import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './service/product.service';
import { CartService } from '../cart/service/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  addedProduct : string;
  filterText: string;
  products: Product[] = [];
  constructor(private productService:ProductService,private cartService:CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{this.getProduct(params["id"]);
    })


  }

  getProduct(id:number){
    this.productService.getProduct(id).subscribe(response =>{
      this.products = response;
      console.log(response)
    })
  }
  addToCard(product: Product){
    //this.addedProduct = product.name;
    this.cartService.addToCart(product);
  }

}
