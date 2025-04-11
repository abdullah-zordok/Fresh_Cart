import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import {
  successResponse,
  mostPopularResponse,
} from '../../../shared/interfaces/data';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/),
    ]),
  });

  isSuccessResponse(
    res: successResponse | mostPopularResponse
  ): res is successResponse {
    return 'token' in res;
  }
  submitloginForm() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          if (this.isSuccessResponse(res)) {
            this._Router.navigate(['home']);
            this.isLoading = false;
            localStorage.setItem('userToken', res.token);
            this._AuthService.decodeUserData();
          }
        },
      });
    }
  }
}
