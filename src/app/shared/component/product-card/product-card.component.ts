import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductStatus } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

@Input() product ! : Iproduct
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onProgressUpdate(){
      this._productService.upadatedStatus(this.product.id, ProductStatus.InProgress)
  }
  onDispatchedUpdate(){
    this._productService.upadatedStatus(this.product.id, ProductStatus.Dispatched)
  }
  onDeliveredUpdate(){
    this._productService.upadatedStatus(this.product.id, ProductStatus.Delivered)
  }


}
