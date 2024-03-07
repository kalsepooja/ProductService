import { Injectable } from '@angular/core';
import { Iproduct, ProductStatus } from '../model/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

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

  constructor(
    private _sanckBar: SnackbarService
  ) { };

  fetchAllProduct(){
    return this.productArray
  }

addProduct(product: Iproduct){

  //api call to add new products.
  this.productArray.push(product)
  this._sanckBar.openSnackBar(`the product ${product.pname} is added !!!`)
};

upadatedStatus(id: string, updatedStatus: ProductStatus ){
 for (const obj of this.productArray) {
    if(obj.id === id){
      let oldStatus = obj.pstatus
      obj.pstatus = updatedStatus
      this._sanckBar.openSnackBar(`the status of product is changed  ${oldStatus} to ${updatedStatus}`)
      break;
    }
 }
}

}
