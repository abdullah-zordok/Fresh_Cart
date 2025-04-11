import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';
import { orderRes } from '../../interfaces/payment/payment';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { shippingAddress } from '../../interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _HttpClient: HttpClient) {}

  cashPayment(cartId: string, address: shippingAddress): Observable<orderRes> {
    return this._HttpClient.post<orderRes>(
      `${enviroment.baseUrl}/api/v1/orders/${cartId}`,
      {
        shippingAddress: address,
      },
      
    );
  }

  onlinePayment(cartId: string, address: shippingAddress): Observable<any> {
    return this._HttpClient.post(
      `${enviroment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${enviroment.domain}`,
      {
        shippingAddress: address,
      },
      
    );
  }
  getUserOrders(userId: string): Observable<any> {
    return this._HttpClient.get<any>(
      `${enviroment.baseUrl}/api/v1/orders/user/${userId}`
    );
  }
}
