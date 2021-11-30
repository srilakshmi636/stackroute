import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MyrouteserviceService {

  constructor(private routerobj : Router, private location : Location) 
     { }

openPrevious()
 {
    this.location.back();
 }

 openLogin()
 {
   this.routerobj.navigate(['login']);
 }

 openHome()
 {
   this.routerobj.navigate(['home']);
 }

 openAbout()
 {
   this.routerobj.navigate(['about']);
 }

 openProduct()
 {
   this.routerobj.navigate(['product'])
 }

 openManufact()
 {
   this.routerobj.navigate(['about/manu']);
 }


 openCategory()
 {
   this.routerobj.navigate(['about/category']);
 }

 openDashboard()
 {
   this.routerobj.navigate(['dashboard']);
 }

openListview()
{
  this.routerobj.navigate(['dashboard/listview']);
}

openGridview()
{
  this.routerobj.navigate(['dashboard/gridview']);
}
openProductedit(mypid : any)
{
  this.routerobj.navigate(['dashboard', 
  {outlets:{productEditoutlet:['productedit',mypid ,'edit']}}  //productedit/:pid/edit
                          ])
}

openBusProduct()
{
  this.routerobj.navigate(['myproduct']);
}

}
