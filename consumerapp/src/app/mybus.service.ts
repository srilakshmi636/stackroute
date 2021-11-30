import { Injectable } from '@angular/core';
import { Bus } from './bus';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyspringapiService } from './myspringapi.service';

@Injectable({
  providedIn: 'root'
})
export class MybusService {
  buses : Array<Bus>=[];
  productsubject : BehaviorSubject<Array<Bus>>;

  constructor(private httpcli : HttpClient,private authser : MyspringapiService)
   {
this.productsubject=new BehaviorSubject<Array<Bus>>([]);

    }


 fetchDatafromServer()
 {
    
  let tok=this.authser.getToken();
  console.log("the token is");
  console.log(tok);
  return this.httpcli.get<Array<Bus>>('http://localhost:9010/api/bus/viewallbus',
  {
    headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
  }).subscribe(
    (res)=> {
      this.buses=res;
      this.productsubject?.next(this.buses);
    }
  );

   }


  getBuses() : BehaviorSubject<Array<Bus>>
  {
return this.productsubject;
  }

}
