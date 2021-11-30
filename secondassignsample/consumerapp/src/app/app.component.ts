import { Component } from '@angular/core';
import { MathfunService } from './mathfun.service';
import { MyloggerService } from './mylogger.service';
import { MyproductService } from './myproduct.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'consumerapp';

  products : Array<Product>=[];

  constructor(private myprodobj: MyproductService)
  {

  }

  calcu()
  {
  this.myprodobj.getProducts().subscribe(

  (res)=> {this.products =res}


  )
  }
}
