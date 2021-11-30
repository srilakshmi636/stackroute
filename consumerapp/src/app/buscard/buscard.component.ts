import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../bus';

@Component({
  selector: 'app-buscard',
  templateUrl: './buscard.component.html',
  styleUrls: ['./buscard.component.css']
})
export class BuscardComponent implements OnInit {


  @Input()
  busdata:Bus=new Bus();
  constructor() { }

  ngOnInit(): void {
  }


  update()
  {

  }
}
