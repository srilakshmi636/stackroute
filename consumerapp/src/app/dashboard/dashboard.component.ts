import { Component, OnInit } from '@angular/core';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private prodservice : MyproductService) { }

  ngOnInit(): void {
this.prodservice.fetchDatafromServer();

  }

}
