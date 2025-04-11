import { RouterLink } from '@angular/router';
import exp from 'constants';

export interface tokenData {
  token: string;
}
export interface forgetPasswordData {
  email: string;
}
export interface signUpData extends loginData, forgetPasswordData {
  name: string;
  rePassword: string;
  phone: string;
}

export interface loginData extends forgetPasswordData {
  password: string;
}

export interface successResponse extends tokenData {
  message: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}
export interface mostPopularResponse {
  message: string;
  statusMsg: string;
}

export interface verifedToken {
  message: string;
  decoded: {
    id: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
  };
}

export interface resetCodeData {
  resetCode: string;
}
export interface resetPasswordData {
  email: string;
  newPassword: string;
}
export interface statusResetCode {
  status: string;
}

export interface shippingAddress {
  details: string
  phone: string
  city: string
}
