import { product } from './../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { cartLoogedRes } from '../../interfaces/cart';
import { get } from 'http';
import { cartRes } from '../../interfaces/cart-res';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartNo: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private _HttpClient: HttpClient) {
    if (typeof localStorage != 'undefined') {
      this.getLoggedUserCart().subscribe({
        next: (res) => {
          this.cartNo.next(res.numOfCartItems);
        },
      });
    }
  }

  addProductToCart(productId: string): Observable<cartRes> {
    {
      return this._HttpClient.post<cartRes>(
        `${enviroment.baseUrl}/api/v1/cart`,
        {
          productId: productId,
        },
        
      );
    }
  }

  getLoggedUserCart(): Observable<cartLoogedRes> {
    return this._HttpClient.get<cartLoogedRes>(
      `${enviroment.baseUrl}/api/v1/cart`,
      
    );
  }
  updateProductCartQuantity(
    productId: string,
    count: string
  ): Observable<cartLoogedRes> {
    return this._HttpClient.put<cartLoogedRes>(
      `${enviroment.baseUrl}/api/v1/cart/${productId}`,
      {
        count: count,
      },
      
    );
  }
  removeProductFromCart(productId: string): Observable<cartLoogedRes> {
    return this._HttpClient.delete<cartLoogedRes>(
      `${enviroment.baseUrl}/api/v1/cart/${productId}`,
      
    );
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete<any>(
      `${enviroment.baseUrl}/api/v1/cart`,
      
    );
  }
}
