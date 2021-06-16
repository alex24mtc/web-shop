import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/data/mock-products';

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
import { CartProduct } from '../../interfaces/cartProduct';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  products=PRODUCTS; 
  cart?:CartProduct[] = [];
 


  constructor(private route:Router,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

  goCheckout(){
    this.route.navigateByUrl('/checkout');
  }

  addCart(product:Product){
    this.cartService.addCart(product)
    this.cart=this.cartService.getCart();

    console.log(this.cart)
  }
  
  deleteProduct(product:Product){
    this.cartService.deleteProduct(product)
    this.cart=this.cartService.getCart();

  }

}
