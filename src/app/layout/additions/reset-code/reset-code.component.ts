import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-reset-code',
  imports: [ReactiveFormsModule, ResetPasswordComponent],
  templateUrl: './reset-code.component.html',
  styleUrl: './reset-code.component.scss',
})
export class ResetCodeComponent {
  errMsg!: string;
  isLoading: boolean = false;
  resetCodeFlag: boolean = true;
  resetPasswordFlag: boolean = false;

  constructor(private _AuthService: AuthService) {}

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{4,}$/),
    ]),
  });
  submitResetCodeForm() {
    if (this.resetCodeForm.valid) {
      this.isLoading = true;
      this._AuthService.resetCode(this.resetCodeForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          this.resetCodeFlag = false;
          this.resetPasswordFlag = true;
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
