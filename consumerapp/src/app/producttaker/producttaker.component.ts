import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MyproductService } from '../myproduct.service';
import { MyrouteserviceService } from '../myrouteservice.service';

@Component({
  selector: 'app-producttaker',
  templateUrl: './producttaker.component.html',
  styleUrls: ['./producttaker.component.css']
})
export class ProducttakerComponent implements OnInit {

  product : Product;

   products : Array<Product>=[];
   emessage:string="";

  output : string="";
  constructor(private prodobj : MyproductService,private myroute : MyrouteserviceService) {

    this.product=new Product();
   }

  ngOnInit(): void {



  }




  addproduct()
  {
   // this.products.push(this.product);

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
