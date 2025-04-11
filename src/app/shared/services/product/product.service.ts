import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';
import { Observable } from 'rxjs';
import { product, productRes } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<productRes> {
    return this._HttpClient.get<productRes>(
      `${enviroment.baseUrl}/api/v1/products/`
    );
  }

  getSpecificProduct(id:string):Observable<{data : product}>{
    return this._HttpClient.get<{data : product}>(`${enviroment.baseUrl}/api/v1/products/${id}`);
  }
}
