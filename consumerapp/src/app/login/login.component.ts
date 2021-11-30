import { Component, OnInit } from '@angular/core';
import { MyrouteserviceService } from '../myrouteservice.service';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:FormControl;
  password:FormControl;


  constructor(private routeobj : MyrouteserviceService,private authserv :AuthenticationService) {
    this.name=new FormControl('',Validators.required);
this.password=new FormControl('',Validators.minLength(4));
   }

  ngOnInit(): void {
  }

  signIn()
  {
    let tok;
let data={"username":this.name.value,"password":this.password.value};
this.authserv.getTokenfromserver(data).subscribe(

  (res)=>{
    console.log(res)
  tok=res["token"];
 this.authserv.storeToken(tok);
  this.routeobj.openDashboard();
  }

)
   
     }
}
