import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addOrremoveWishList, userWishList } from '../../interfaces/wish-list';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishNo: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  value!: number;
  constructor(private _HttpClient: HttpClient) {
    if (typeof localStorage != 'undefined') {
      this.getLoggedUserWishList().subscribe({
        next: (res) => {
          this.wishNo.next(res.data.length);
          this.value = this.wishNo.getValue();
          console.log(this.value);
        },
      });
    }
  }

  addProductToWishList(productId: string): Observable<addOrremoveWishList> {
    {
      return this._HttpClient.post<addOrremoveWishList>(
        `${enviroment.baseUrl}/api/v1/wishlist`,
        {
          productId: productId,
        },

      );
    }
  }

  getLoggedUserWishList(): Observable<userWishList> {
    return this._HttpClient.get<userWishList>(
      `${enviroment.baseUrl}/api/v1/wishlist`,
    );
  }

  removeProductFromWishList(
    productId: string
  ): Observable<addOrremoveWishList> {
    return this._HttpClient.delete<addOrremoveWishList>(
      `${enviroment.baseUrl}/api/v1/wishlist/${productId}`,
    );
  }
}
