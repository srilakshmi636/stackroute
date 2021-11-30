import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyloggerService {

  constructor() { 


  }

loginfo()
{
  console.log("Checking service logs");
}

}
