import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrdersService } from '../../../shared/services/orders/orders.service';

import { CartService } from '../../../shared/services/cart/cart.service';
import { cartRes } from '../../../shared/interfaces/cart-res';
import { cartLoogedRes } from '../../../shared/interfaces/cart';
import { shippingAddress } from '../../../shared/interfaces/data';
import { ActivatedRoute, Router } from '@angular/router';
import { userOrderRes } from '../../../shared/interfaces/userOrders/user-orders';
@Component({
  selector: 'app-shipping-address',
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.scss',
})
export class ShippingAddressComponent {
  paymentMethod: string = '';
  isDropdownOpen: boolean = false;

  cartId: string = '';
  userId: string = '';
  
  // data !:userOrderRes
  constructor(
    private _OrdersService: OrdersService,
    private _CartService: CartService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}
  selectPaymentMethod(method: string) {
    this.paymentMethod = method;
    this.isDropdownOpen = false;
  }
  shippingAddressForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl(null, [Validators.required]),
  });
  submitShippingAddressForm() {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.cartId = res['cartId'];
      },
    });
    if (this.shippingAddressForm.valid) {
      
      if (this.paymentMethod === 'Cash Payment') {
        
        this._OrdersService
          .cashPayment(this.cartId, this.shippingAddressForm.value)
          .subscribe({
            next: (res) => {
              this.userId = res.data.user;
              console.log(this.userId);

              this._Router.navigate(['allorders', this.userId]);
            },
          });
      } else if (this.paymentMethod === 'Online Payment') {
        
        this._OrdersService
          .onlinePayment(this.cartId, this.shippingAddressForm.value)
          .subscribe({
            next: (res) => {
              window.open(res.session.url, '_self');
            },
          });
      }
    }
  }
}
