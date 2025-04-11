
import { Component } from '@angular/core';
import { FlowbiteService } from '../../../shared/services/flowbite/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import { CartService } from '../../../shared/services/cart/cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLogin: boolean = false;

  
  x:number=0;

  constructor(
    private flowbiteService: FlowbiteService,
    public _AuthService: AuthService,
    public _CartService:CartService
  ) {

  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe((res) => {
      if (res != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });

    this.flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
