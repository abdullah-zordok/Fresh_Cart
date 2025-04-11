import { category } from './../../../shared/interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category/category.service';
import { SearchPipe } from '../../../sahred/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [ FormsModule, UpperCasePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
    categoryList!: category[];
    

constructor(private _CategoryService:CategoryService){}

ngOnInit(): void {
this.getAllCategories();
}
getAllCategories() {
  this._CategoryService.getAllCategories().subscribe({
    next: res =>{
      this.categoryList = res.data
      console.log(this.categoryList);
    }
  })
}

}
