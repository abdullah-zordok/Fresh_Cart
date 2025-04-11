import { AuthService } from './../../../shared/services/Authentication/auth.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  mostPopularResponse,
  successResponse,
} from '../../../shared/interfaces/data';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  errMsg!: string;
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    this.passwordMatchValidator
  );

  isSuccessResponse(
    res: successResponse | mostPopularResponse
  ): res is successResponse {
    return 'token' in res;
  }
  submitRegisterForm() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._AuthService.signUp(this.registerForm.value).subscribe({
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

  passwordMatchValidator(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      g.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }
}
