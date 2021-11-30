import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProducteditdialogComponent } from '../producteditdialog/producteditdialog.component';

@Component({
  selector: 'app-producteditopener',
  templateUrl: './producteditopener.component.html',
  styleUrls: ['./producteditopener.component.css']
})
export class ProducteditopenerComponent implements OnInit {

   productid : any;
  constructor(private curroute : ActivatedRoute,private mydialog: MatDialog) {

    this.productid = this.curroute.snapshot.paramMap.get('pid');

    this.mydialog.open(ProducteditdialogComponent,{
      data : {myproductid:this.productid}
    })
//    console.log("current product id"  + this.productid);
   }

  ngOnInit(): void {
  }
//   opendialog()
//   {
// this.mydialog.open(ProducteditdialogComponent,{
//   data : {myproductid:this.productid}
// })
//   }

}
