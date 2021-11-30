import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:FormControl;
  password:FormControl;

  constructor() {
this.name=new FormControl('',Validators.required);
this.password=new FormControl('',Validators.minLength(4));


   }

  ngOnInit(): void {
  }

validateName()
{
  let ans="";
  if(this.name.touched && this.name.dirty)
  {
     if(this.name.hasError('required'))
      ans="Name can not be null";
  }
  return ans;
}

validatepassword()
{
let pass="";
if(this.password.dirty && this.password.invalid)
 pass="Password should be of length 4";


 return pass;
 
}

}
