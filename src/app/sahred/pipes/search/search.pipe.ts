import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../../shared/interfaces/product';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(productList: product[], userWord: string, searchBy:string): product[] {
    return productList.filter(product => {
      if (searchBy === 'title') {
        return product.title.toLowerCase().includes(userWord.toLowerCase());
      } else if (searchBy === 'category') {
        return product.category?.name?.toLowerCase().includes(userWord.toLowerCase());
      }
      return false;
    });
  }
}
