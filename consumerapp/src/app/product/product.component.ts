import { Component, OnInit } from '@angular/core';
import { MathfunService } from '../mathfun.service';
import { MyloggerService } from '../mylogger.service';
import { Product } from '../product';
import { MyproductService } from '../myproduct.service';
import { MyrouteserviceService } from '../myrouteservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent implements OnInit {

   product : Product;

   products : Array<Product>=[];
   emessage:string="";

  output : string="";
  constructor(private prodobj : MyproductService,private myroute : MyrouteserviceService) {

    this.product=new Product();
   }

  ngOnInit(): void {

this.fetchdata();

  }


  fetchdata()
  {
    this.prodobj.getProducts().subscribe(

      (resdata)=> 
      { this.products=resdata; }

      )
  }


  addproduct()
  {
    this.products.push(this.product);

     this.prodobj.addProduct(this.product).subscribe(

      (res)=> 
      {
        
        this.product=new Product();
      },
      (errobj)=>
      {
        this.emessage=errobj;
        
      }


     );

   

  }

 



}
