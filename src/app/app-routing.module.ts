import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'shop', 
    pathMatch:'full'
  },
  {
    path:'shop',
    component: ShopPageComponent
  },
  {
    path:'checkout',
    component: CheckoutPageComponent
  }, 
    
  {
    path:'**',
    redirectTo: 'shop', 
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
