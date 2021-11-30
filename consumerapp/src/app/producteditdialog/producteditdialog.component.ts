import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyrouteserviceService } from '../myrouteservice.service';
import { MyproductService } from '../myproduct.service';
import { Product } from '../product';

@Component({
  selector: 'app-producteditdialog',
  templateUrl: './producteditdialog.component.html',
  styleUrls: ['./producteditdialog.component.css']
})
export class ProducteditdialogComponent implements OnInit,OnDestroy {
 productobj : Product=new Product();
  productid : any;
  constructor(private mydialog : MatDialogRef<ProducteditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any,
    private myroute : MyrouteserviceService,
    private prodserv : MyproductService )
 
     {

      }

  ngOnInit(): void {
    this.productid=this.data.myproductid;
this.productobj= this.prodserv.findProductById(this.productid);    

  }

  Callclose()
  {
    this.mydialog.close();
  }

  callupdate()
  {
    this.prodserv.updateProduct(this.productobj).subscribe(
    (res)=>  console.log("updated")
    );
    this.mydialog.close();
  }
  ngOnDestroy()
  {
    this.myroute.openPrevious();
  }

}
