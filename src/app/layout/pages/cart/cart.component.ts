import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Data } from '../../../shared/interfaces/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  data!:Data
constructor( private _CartService: CartService){}

ngOnInit(): void {
this.getLoggedUserCart();
}


getLoggedUserCart(){
  this._CartService.getLoggedUserCart().subscribe({
    next: (res) => {
      this.data=res.data
      console.log(this.data);
    }
  })
}



updateProductCartQuantity(productId:string, count:number){
  this._CartService.updateProductCartQuantity(productId, count.toString()).subscribe({
    next: (res) => {
      // this.data=res.data
      this.data=res.data;
      console.log(res);
      this._CartService.cartNo.next(res.numOfCartItems);
    }
  })
}
removeProductFromCart(productId:string){
  this._CartService.removeProductFromCart(productId).subscribe({
    next: (res) => {

      this.data=res.data;
      this._CartService.cartNo.next(res.numOfCartItems);
    }
  })
}

clearCart(){
  this._CartService.clearCart().subscribe({
    next: (res) => {
      this.data=res.data;
      this._CartService.cartNo.next(0);
    }
  })
}
}
