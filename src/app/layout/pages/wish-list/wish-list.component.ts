
import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../../shared/services/brands/wish-list.service';
import { Data } from '../../../shared/interfaces/wish-list';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
data!: Data[]

constructor(private _WishListService:WishListService, private _CartService:CartService, private _ToastrService: ToastrService){}


ngOnInit(): void {
  this.getLoggedUserWishList();  
}

getLoggedUserWishList(){
this._WishListService.getLoggedUserWishList().subscribe({
  next: (res) => {
    this.data=res.data
    
  }
})
}

addProductToCart(productId: string) {
  this._CartService.addProductToCart(productId).subscribe({
    next: (res) => {
      
      this._CartService.cartNo.next(res.numOfCartItems);
      this._ToastrService.success(res.message, 'Success', {
        timeOut: 2000,
        progressBar: true,
      });
    },
  });
  this.removeProductFromWishList(productId);
}

removeProductFromWishList(productId: string) {
  this._WishListService.removeProductFromWishList(productId).subscribe({
    next: (res) => {
      
      this._WishListService.wishNo.next(res.data.length)
      this._ToastrService.success(res.message, 'Success', {
        timeOut: 2000,
        progressBar: true,
      });
    },
  })
}
}

