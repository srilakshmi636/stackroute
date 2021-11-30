import { Component, OnInit } from '@angular/core';
import { MyrouteserviceService } from '../myrouteservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private myroute: MyrouteserviceService) { }

  ngOnInit(): void {
  }


  callmanu()
  {
  this.myroute.openManufact();
  }
  
  callcate()
  {
  this.myroute.openCategory();
  }

}
