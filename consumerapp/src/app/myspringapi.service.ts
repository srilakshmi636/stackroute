import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyspringapiService {

  constructor(private httpcli : HttpClient) {

  }

getTokenfromserver(data:any):Observable<any>
{
return this.httpcli.post('http://localhost:9095/api/auth/login',data);
}



storeToken(tok:any)
{
 sessionStorage.setItem("mytoken",tok);
}


getToken():any
{
 return sessionStorage.getItem("mytoken");
}






}
