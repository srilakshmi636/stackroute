import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@Input()
company:string="";



userobj : User;

  constructor() { 
    this.userobj=new User();
  }

  ngOnInit(): void {
  }


  display(myuserform:any)
  {
console.log(this.userobj.username);

    let uobj=myuserform.value;
    console.log(uobj.username);

  }
}
