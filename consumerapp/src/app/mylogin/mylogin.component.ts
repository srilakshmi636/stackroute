import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyrouteserviceService } from '../myrouteservice.service';
import { MyspringapiService } from '../myspringapi.service';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {
  mailid:FormControl;
  password:FormControl;


  constructor(private routeobj : MyrouteserviceService,private authserv : MyspringapiService) {
    this.mailid=new FormControl('',Validators.required);
this.password=new FormControl('',Validators.minLength(4));
   }

  ngOnInit(): void {
  }

  signIn()
  {
    let tok;
let data={"mailid":this.mailid.value,"password":this.password.value};
this.authserv.getTokenfromserver(data).subscribe(

  (res)=>{
    console.log(res)
  tok=res["token"];
 this.authserv.storeToken(tok);
 this.routeobj.openBusProduct();
//  this.routeobj.openDashboard();
  }

)
   
     }
}
