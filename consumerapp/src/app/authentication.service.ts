import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpcli : HttpClient) {

   }

getTokenfromserver(data:any):Observable<any>
{
return this.httpcli.post('http://localhost:3000/auth/v1',data);
}

validateToken() : Promise<boolean>
{
  let tok=this.getToken();
return this.httpcli.post('http://localhost:3000/auth/v1/isAuthenticated',{},
{
  headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
}).pipe
(
  map(
    (res:any)=>
    {
  return (res["isAuthenticated"]);
    }
  )
).toPromise(); 

}

storeToken(tok:any)
{
  localStorage.setItem("mytoken",tok);
}


getToken():any
{
  return localStorage.getItem("mytoken");
}


}
