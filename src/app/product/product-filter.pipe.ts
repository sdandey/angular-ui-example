import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './iproduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: IProduct) => (
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || product.description.toLocaleLowerCase().indexOf(filterBy) !== -1
      || product.productId.toString().toLocaleLowerCase().indexOf(filterBy) !== -1
      )) : value;
  }
}
