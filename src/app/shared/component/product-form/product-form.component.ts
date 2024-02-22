import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnsubscriptionError } from 'rxjs';
import { UuidService } from '../../service/uuid.service';
import { Iproduct, ProductStatus } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm ! : FormGroup
  constructor(private _uuidService: UuidService) { }

  ngOnInit(): void {
    this.createForm()
  };

  createForm(){
    this.productForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pdetails : new FormControl(null, [Validators.required])
    })
  };

  onProductAdd(){
    if(this.productForm.valid){
      let product: Iproduct = {...this.productForm.value, 
        id: this._uuidService.uuid(),
        pstatus: ProductStatus.InProgress
      }
      console.log(this.productForm.value);
      console.log(product);
      
    }

  }

}
