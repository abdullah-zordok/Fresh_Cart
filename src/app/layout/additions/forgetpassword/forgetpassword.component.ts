import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import { ResetCodeComponent } from '../reset-code/reset-code.component';
@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule, ResetCodeComponent],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
  errMsg!: string;
  isLoading: boolean = false;
  sucMsg!: string;
  forgetPasswordFlag: boolean = true;
  resetCodeFlag: boolean = false;
  constructor(private _AuthService: AuthService) {}

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{4,}$/),
    ]),
  });
  submitForgetPasswordForm() {
    if (this.forgetPasswordForm) {
      this.isLoading = true;
      this._AuthService
        .forgetPassword(this.forgetPasswordForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = false;
            this.sucMsg = res.message;
            this.forgetPasswordFlag = false;
            this.resetCodeFlag = true;
          },
          error: (err) => {
            this.isLoading = false;
            console.log(err);
            this.errMsg = err.error.message;
          },
        });
    }
  }
  submitResetCodeForm() {
    if (this.resetCodeForm) {
      this.isLoading = true;
      this._AuthService.resetCode(this.resetCodeForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
          this.errMsg = err.error.message;
        },
      });
    }
  }
}
