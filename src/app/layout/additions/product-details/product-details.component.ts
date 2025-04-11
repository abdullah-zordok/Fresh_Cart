import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { product } from '../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product!: product;
  id!: string;

  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService:CartService,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.id = res['id'];

        this._ProductService.getSpecificProduct(this.id).subscribe({
          next: (res) => {
            this.product = res.data;
            console.log(this.product);
          },
        });
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
}
