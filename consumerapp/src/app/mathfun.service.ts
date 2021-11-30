import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathfunService {

  constructor() { }

calcuTax(salary : number) : number
{
   if (salary>5000)
   return salary*10/100;
   else
   return salary*5/100; 
}

}
