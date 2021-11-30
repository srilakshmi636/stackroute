import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-productsample',
  templateUrl: './productsample.component.html',
  styleUrls: ['./productsample.component.css']
})
export class ProductsampleComponent implements OnInit {

 product : Product;
 productlist : Array<Product>=[];


  constructor() {

    this.product=new Product();
   }

  ngOnInit(): void {
  }

  addproduct()
  {
    this.productlist.push(this.product);
    console.log(this.productlist);
    this.product=new Product();
  }

}
