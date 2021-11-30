import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { MybusService } from '../mybus.service';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
  buses: Array<Bus>=[];
  constructor(private busserve:MybusService) {
    this.busserve.fetchDatafromServer();

   }


  ngOnInit(): void {
    
   
    this.fetchdata();
  }

  fetchdata()
  {
    this.busserve.getBuses().subscribe(

      (resdata)=> 
      { this.buses=resdata; }

      )
  }

}
