import { Component, OnInit } from '@angular/core';
import { MyproductService } from '../myproduct.service';
import { Product } from '../product';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  products: Array<Product>=[];
  constructor(private prodobj:MyproductService) { }


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

}
