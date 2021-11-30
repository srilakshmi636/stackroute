import { Component, OnInit } from '@angular/core';
import { MyrouteserviceService } from '../myrouteservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routserve : MyrouteserviceService) { }

  ngOnInit(): void {
  }
  lview()
  {
this.routserve.openListview();
  }
  logout()
  {
    sessionStorage.clear();
    this.routserve.openHome();
  }
  gview()
  {
this.routserve.openGridview();
  }

}
