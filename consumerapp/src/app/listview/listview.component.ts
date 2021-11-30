import { Component, OnInit } from '@angular/core';
import { MyproductService } from '../myproduct.service';
import { Product } from '../product';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  products: Array<Product>=[];
  productinput : Array<Product>=[];
  productoutput :Array<Product>=[];
  constructor(private prodobj:MyproductService) { }


  ngOnInit(): void {
    this.fetchdata();
  }

  fetchdata()
  {
    this.prodobj.getProducts().subscribe(

      (resdata)=> 
      { 
        this.products=resdata;
       this.filterdata(resdata);
      }

      )
  }

  filterdata( resutsdata : Array<Product>)
  {
this.productinput=resutsdata.filter( prd=>prd.category==="input");
this.productoutput=resutsdata.filter( prd=>prd.category==="output");
  }

}
