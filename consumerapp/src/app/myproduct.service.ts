import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyproductService {

  products : Array<Product>=[];
  productsubject : BehaviorSubject<Array<Product>>;

  constructor(private httpcli : HttpClient,private authser : AuthenticationService)
   {
this.productsubject=new BehaviorSubject<Array<Product>>([]);

    }


 fetchDatafromServer()
 {
    
  let tok=this.authser.getToken();
  return this.httpcli.get<Array<Product>>('http://localhost:3000/api/v1/products',
  {
    headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
  }).subscribe(
    (res)=> {
      this.products=res;
      this.productsubject?.next(this.products);
    }
  );

   }


  getProducts() : BehaviorSubject<Array<Product>>
  {
return this.productsubject;
  }

  addProduct(prodobj:Product) : Observable<Product>
  {
    let tok=this.authser.getToken();
    return this.httpcli.post<Product>('http://localhost:3000/api/v1/products',prodobj,
    {
      headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
    })
    .pipe
    (
    tap( (newproduct : Product) =>
     {
       this.products.push(newproduct);
       this.productsubject?.next(this.products);
     }


    )

    )

  } //addproducr

  deleteProduct(id : any) 
  {
    let tok=this.authser.getToken();
  return  this.httpcli.delete(`http://localhost:3000/api/v1/products/${id}`,
    {
      headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
    }
    ).pipe
    (
    tap( ()=>
    {
      const ind=this.products.findIndex( prd=> prd.id===id);
      this.products.splice(ind,1);
      this.productsubject.next(this.products);
    }


    )
 

    )
  }

  updateProduct(productmod : Product)
  {
    let tok=this.authser.getToken();

    return this.httpcli.put(`http://localhost:3000/api/v1/products/${productmod.id}`,
    productmod,
    {
      headers: new HttpHeaders().set('Authorization',`Bearer ${tok}` )
    }
    ).pipe
    (
      tap( (modiobj)=>
           {
             let updatedele=this.products.find ( prd=> prd.id ===productmod.id);
             Object.assign(updatedele,modiobj);
             this.productsubject.next(this.products);
           }
     )
    )
  }

 findProductById(id : any) : any
 {
  
   const productobj=this.products.find( prd => prd.id==id);
   return productobj;
 }



}
