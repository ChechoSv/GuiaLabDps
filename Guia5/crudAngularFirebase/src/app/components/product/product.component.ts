import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductService ) { 
   
  }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm:NgForm){
    if(productForm.value.$key == null)
    this.productService.insertProduct(productForm.value);
    else
    this.productService.updateProduct(productForm.value);
    this.resetForm(productForm);
  }
  resetForm(productForm?:NgForm){
    if(productForm != null)
    productForm.reset();
    this.productService.selectedProduct = new Product();
  }
}
