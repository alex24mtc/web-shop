import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';
import { CartProduct } from '../interfaces/cartProduct';

import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product?:Product[];

  products=PRODUCTS;  //es el mock-products (el json)
  cart?:CartProduct[] = [];  //significa que de inicio esta vacio

  constructor() { }



  addCart(product:Product):void{
    console.log(product);
    //si no esta seleccionado = lo añade
    //si esta seleccionado, se suma 1 a quantitiy
    let productCart=this.cart.find(elementCart => elementCart.id === product.id)
    
    if(productCart === undefined){ 
     
      let cartProductToAdd = {
        id:product.id,
        name:product.name,
        price:product.price,
        quantity:1,
        discount:0,
        totalPriceDiscount:0
            
      };
      this.cart.push(cartProductToAdd);

    }else{
      productCart.quantity+=1;
    }
    
    
    this.applyPromotions(this.cart);
    
  }

  applyPromotions(list:CartProduct[]){
    
    for (let i = 0; i < list.length; i++) {
      switch (list[i].id) {
        case 'GR1':
          if (list[i].quantity % 2 != 0) {
            list[i].quantity += 1;
            list[i].finalPrice = list[i].price * (list[i].quantity / 2);
          }
          break;

        case 'SR1':
          if (list[i].quantity >= 3) {
            list[i].finalPrice = (list[i].price - 0.5) * list[i].quantity;
          } else if (list[i].quantity === 2) {
            list[i].finalPrice = list[i].price * 2;
          } else if (list[i].quantity === 1) {
            list[i].finalPrice = list[i].price;
          }
          break;

        case 'CF1':
          if (list[i].quantity >= 3) {
            list[i].finalPrice = list[i].price * 0.6 * list[i].quantity;
          } else if (list[i].quantity === 1) {
            list[i].finalPrice = list[i].price;
          } else if (list[i].quantity === 2) {
            list[i].finalPrice = list[i].price * 2;
          }
          break;
      }
    }


  }
  
  deleteProduct(product:Product){
    let productCart=this.cart.find(elementCart => elementCart.id === product.id);

    if(productCart===undefined){
      return;
    }
    
    if(productCart .quantity>1){ 
      productCart.quantity -=1;   
    
    }else{
     let index= this.cart.indexOf(productCart);
     this.cart.splice(index,1);
    }
    console.log(product);

  }
  

  getCart(){     //es para enlazar con el servicio cartService
    return this.cart;
  }


}


