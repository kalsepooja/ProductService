import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/service/product.service';
import { Iproduct } from './shared/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
// [x: string]: Iproduct;
  title = 'ProductService';
  productArr ! : Array<Iproduct>;
// prodct: Iproduct[];


  constructor(private _productService: ProductService){}

  ngOnInit(): void {
    this.productArr = this._productService.fetchAllProduct()
  }
  

}
