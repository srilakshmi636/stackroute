import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:string="Natwest";
 
  product: FormGroup;

  constructor()
  {
    this.product=new FormGroup(
{
  productid:new FormControl('',Validators.required),
  pname:new FormControl('',Validators.minLength(3)),
  price :new FormControl('',Validators.required)
});

  }

addproduct()
{
  console.log(this.product.value);
}



}
