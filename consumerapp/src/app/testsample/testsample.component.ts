import { Component, OnInit } from '@angular/core';
import { UsertestService } from '../usertest.service';

@Component({
  selector: 'app-testsample',
  templateUrl: './testsample.component.html',
  styleUrls: ['./testsample.component.css']
})
export class TestsampleComponent implements OnInit {

  name : string="";
  username : string ="";

  constructor(private utest : UsertestService) { }

  ngOnInit(): void {
    this.username=this.utest.user.username;
  }

}
