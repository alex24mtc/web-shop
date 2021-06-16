import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/data/mock-products';
import { CartProduct } from 'src/app/interfaces/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  products=PRODUCTS; 
  cart?:CartProduct[] = [];
  cartNumberOfProducts:number = 0;
  totalPrice:number=0;


  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.finalPrice();
    this.getData();
  }

  finalPrice(){
    this.cartService.calculateFinalPrice();
    
  }

  getData(){
    this.cart=this.cartService.getCart();
    this.cartNumberOfProducts = this.cartService.cartNumberOfProducts;
    this.totalPrice = this.cartService.totalPrice
  }


}
