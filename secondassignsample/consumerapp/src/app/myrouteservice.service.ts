import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MyrouteserviceService {

  constructor(private routerobj : Router) 
     { }

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
}
