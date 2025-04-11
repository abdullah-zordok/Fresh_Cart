import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { product } from '../../../shared/interfaces/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../../sahred/pipes/search/search.pipe';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from '../../../shared/services/brands/wish-list.service';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, UpperCasePipe, SearchPipe, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productList!: product[];
  userWord: string = '';
  searchBy: string = 'title';
  
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _WishListService: WishListService,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this._ProductService.getAllProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
      },
    });
  }
  addProductToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        console.log(res);
        this._CartService.cartNo.next(res.numOfCartItems);
        this._ToastrService.success(res.message, 'Success', {
          timeOut: 2000,
          progressBar: true,
        });
      },
    });
  }

  addProductToWishList(productId: string) {
    this._WishListService.addProductToWishList(productId).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message, 'Success', {
          timeOut: 2000,
          progressBar: true,
        });
      },
    });
  }
}
