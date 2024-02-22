import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

@Input() product ! : Iproduct
  constructor() { }

  ngOnInit(): void {
  }

}
