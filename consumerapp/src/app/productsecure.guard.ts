import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { MyrouteserviceService } from './myrouteservice.service';
import { MyspringapiService } from './myspringapi.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsecureGuard implements CanActivate {

constructor(private authservice:MyspringapiService,private rouserve : MyrouteserviceService)
{

}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    
    {
      
let tok=this.authservice.getToken();
if(tok==null)
return false;
else
return true;

// return result.then
// (
//     (res)=>
//     {
//       if(!res)
//       {
//       this.rouserve.openLogin();
//       return false;
//       }
//       else
//       return true;
//     }

// )
// .catch()

  
}

}