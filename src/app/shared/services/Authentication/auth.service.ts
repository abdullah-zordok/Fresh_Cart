import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import {
  mostPopularResponse,
  loginData,
  signUpData,
  successResponse,
  verifedToken,
  forgetPasswordData,
  resetCodeData,
  statusResetCode,
  tokenData,
  resetPasswordData,
} from '../../interfaces/data';
import { enviroment } from '../../../enviroment/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<null | JwtPayload> =
    new BehaviorSubject<null | JwtPayload>(null);

  constructor(
    private _HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private Id: object,
    private _Router: Router
  ) {
    if (isPlatformBrowser(Id)) {
      if (localStorage.getItem('userToken') != null) {
       this.decodeUserData();
        // this.verifyToken().subscribe({
        //   next: () => {
        //     this.decodeUserData();
        //   },
        //   error: () => {
        //     this.logOut();
        //   },
        // });
      }
    }
  }

  signUp(data: signUpData): Observable<successResponse | mostPopularResponse> {
    return this._HttpClient.post<successResponse | mostPopularResponse>(
      `${enviroment.baseUrl}/api/v1/auth/signup`,
      data
    );
  }
  signIn(data: loginData): Observable<successResponse | mostPopularResponse> {
    return this._HttpClient.post<successResponse | mostPopularResponse>(
      `${enviroment.baseUrl}/api/v1/auth/signin`,
      data
    );
  }

  decodeUserData() {
    const token = localStorage.getItem('userToken') || '';
    const decoded = jwtDecode(token);
    this.userData.next(decoded);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }

  verifyToken(): Observable<mostPopularResponse | verifedToken> {
    return this._HttpClient.get<mostPopularResponse | verifedToken>(
      `${enviroment.baseUrl}/api/v1/auth/verifyToken`,
     
    );
  }

  forgetPassword(data: forgetPasswordData): Observable<mostPopularResponse> {
    return this._HttpClient.post<mostPopularResponse>(
      `${enviroment.baseUrl}/api/v1/auth/forgotPasswords`,
      data
    );
  }

  resetCode(
    data: resetCodeData
  ): Observable<statusResetCode | mostPopularResponse> {
    return this._HttpClient.post<statusResetCode | mostPopularResponse>(
      `${enviroment.baseUrl}/api/v1/auth/verifyResetCode`,
      data
    );
  }

  resetPassword(
    data: resetPasswordData
  ): Observable<tokenData | mostPopularResponse> {
    return this._HttpClient.put<tokenData | mostPopularResponse>(
      `${enviroment.baseUrl}/api/v1/auth/resetPassword`,
      data
    );
  }
}
