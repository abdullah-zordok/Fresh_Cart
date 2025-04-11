import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/Authentication/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  let _AuthService: AuthService = inject(AuthService);
  let _Router: Router = inject(Router);

  if (_AuthService.userData.getValue() === null) {
    return true;
  }
  _Router.navigate(['home']);
  return false;
};
