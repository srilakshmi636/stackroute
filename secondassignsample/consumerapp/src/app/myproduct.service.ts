import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MyproductService {

  constructor(private httpcli : HttpClient,private authser : AuthenticationService) { }

  getProducts() : Observable<Array<Product>>
  {
let tok=this.authser.getToken();
    return this.httpcli.get<Array<Product>>('http://localhost:3000/api/v1/products',
    {
      headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
    });
  }

  addProduct(prodobj:Product) : Observable<Product>
  {
    let tok=this.authser.getToken();
    return this.httpcli.post<Product>('http://localhost:3000/api/v1/products',prodobj,
    {
      headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
    })
  }
}
