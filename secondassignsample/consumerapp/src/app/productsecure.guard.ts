import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { MyrouteserviceService } from './myrouteservice.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsecureGuard implements CanActivate {

constructor(private authservice:AuthenticationService,private rouserve : MyrouteserviceService)
{

}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    
    {
      
let result=this.authservice.validateToken();

return result.then
(
    (res)=>
    {
      if(!res)
      {
      this.rouserve.openLogin();
      return false;
      }
      else
      return true;
    }

)
.catch()

  
}

}