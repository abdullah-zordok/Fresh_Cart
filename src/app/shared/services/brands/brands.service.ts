import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';
import { Observable } from 'rxjs';
import { brandsRes } from '../../interfaces/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }


  getAllBrands():Observable<brandsRes>{
    return this._HttpClient.get<brandsRes>(`${enviroment.baseUrl}/api/v1/brands`);
  }
}
