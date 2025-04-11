import { category } from './../../../shared/interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category/category.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  imports: [CarouselModule],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss',
})
export class CategorySliderComponent implements OnInit {
  categoryList!: category[];
  constructor(private _CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this._CategoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categoryList = res.data;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400:{
        items: 7
      }
    },
    nav: true,
    rtl: true,
    margin: 10,
  };
}
