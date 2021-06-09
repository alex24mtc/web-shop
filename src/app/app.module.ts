import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components created
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutPageComponent,
    ShopPageComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
