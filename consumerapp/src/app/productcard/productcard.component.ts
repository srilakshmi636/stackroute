import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { MyproductService } from '../myproduct.service';
import { MyrouteserviceService } from '../myrouteservice.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {


  @Input()
  myproduct: Product=new Product();
  constructor(private prodserv : MyproductService,private rouobj : MyrouteserviceService) { }

  ngOnInit(): void {
  }

  delete()
  {
    this.prodserv.deleteProduct(this.myproduct.id).subscribe(
      r=>console.log("deleted")
    )

     }

     update()
     {
       this.rouobj.openProductedit(this.myproduct.id);
     }



}
