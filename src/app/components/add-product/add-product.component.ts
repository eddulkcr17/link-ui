import { Component } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductoService } from '../../services/producto.service';
import { CLOSING } from 'ws';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product: Product = {
    mfgr: '',
    prodtName: '',
    model: '',
    unitInStock: '',
    unitListPrice: ''
  };

  submitted= false;

  constructor(private productService: ProductoService){}

  saveProduct(): void{
    const data ={
      mfgr: this.product.mfgr,
      prodtName:this.product.prodtName,
      model: this.product.model,
      unitInStock: this.product.unitInStock,
      unitListPrice: this.product.unitListPrice
    };

    this.productService.create(data)
      .subscribe({
        next:(res)=> {
          console.log(res);
          this.submitted =true;
        },
        error: (e)=> console.error(e)

      });

  }
  newProduct(): void{
    this.submitted=false;
    this.product={
      mfgr: '',
      prodtName: '',
      model: '',
      unitInStock: '',
      unitListPrice: ''
    }
  }

}
