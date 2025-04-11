import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  mostPopularResponse,
  tokenData,
} from '../../../shared/interfaces/data';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  errMsg!: string;
  isLoading: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  isSuccessResponse(res: tokenData | mostPopularResponse): res is tokenData {
    return 'token' in res;
  }
  submitResetPasswordForm() {
    if (this.resetPasswordForm.valid) {
      this.isLoading = true;
      this._AuthService.resetPassword(this.resetPasswordForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          this._Router.navigate(['home']);
          if (this.isSuccessResponse(res)) {
            localStorage.setItem('userToken', res.token);
            this._AuthService.decodeUserData();
          }
        },
      });
    }
  }
}
