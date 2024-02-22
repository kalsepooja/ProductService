import { Injectable } from '@angular/core';
import { Iproduct, ProductStatus } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArray: Array<Iproduct> = [
    {
      pname: 'Samsung 31',
      pdetails: 'Mobile 128 6',
      pstatus: ProductStatus.InProgress,
      id: 'qwerty3456wertyu',
    },
    {
      pname: 'Samsung S32',
      pdetails: 'Mobile 128 6',
      pstatus: ProductStatus.Delivered,
      id: 'ghjkl5678rtyui',
    },
  ];

  constructor() { };

  fetchAllProduct(){
    return this.productArray
  }

addProduct(product: Iproduct){
  this.productArray.push(product)
}

}
