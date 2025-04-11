import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { ProductsComponent } from './layout/pages/products/products.component';


import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { authguardGuard } from './shared/gaurds/auth/authguard.guard';
import { loginGuard } from './shared/gaurds/login/login.guard';
import { ForgetpasswordComponent } from './layout/additions/forgetpassword/forgetpassword.component';
import { ProductDetailsComponent } from './layout/additions/product-details/product-details.component';
import { ShippingAddressComponent } from './layout/additions/shipping-address/shipping-address.component';

import { WishListComponent } from './layout/pages/wish-list/wish-list.component';
import { AllordersComponent } from './layout/additions/allorders/allorders.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
    canActivate: [authguardGuard],
  },
  {
    path: 'wishList',
    component: WishListComponent,
    title: 'WishList',
    canActivate: [authguardGuard],
  },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'categories', loadComponent: () => import('./layout/pages/categories/categories.component').then( (c)=> c.CategoriesComponent), title: 'Categories' },
  { path: 'brands', loadComponent: () => import('./layout/pages/brands/brands.component').then( (c)=> c.BrandsComponent), title: 'Brands' },
  {
    path: 'allorders/:userId',
    component: AllordersComponent,
    title: 'Order Details',
  },
  { path: 'allorders', component: AllordersComponent, title: 'All Orders' },
  {
    path: 'shipping-address/:cartId',
    component: ShippingAddressComponent,
    title: 'Shipping Address',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [loginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
    canActivate: [loginGuard],
  },
  {
    path: 'forget-password',
    component: ForgetpasswordComponent,
    title: 'Forget Password',
  },
  {
    path: 'productdetails/:id',
    component: ProductDetailsComponent,
    title: 'productDetails',
  },
  { path: '**', component: NotfoundComponent, title: 'Notfound' },
];
