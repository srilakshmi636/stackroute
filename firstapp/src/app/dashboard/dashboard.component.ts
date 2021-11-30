import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

colors : string[] = ["red","blue","green"];

  constructor() { }

  ngOnInit(): void {
  }

  callData()
  {
    alert("You clicked button");
  }


}
