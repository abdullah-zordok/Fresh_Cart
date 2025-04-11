import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';
import { Observable } from 'rxjs';
import { categoryRes } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }


  getAllCategories():Observable<categoryRes>{
    return this._HttpClient.get<categoryRes>(`${enviroment.baseUrl}/api/v1/categories`);
  }
}
