import { Component } from '@angular/core';
import { Student } from 'src/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = "Mary";

  mark : number =0;

  colors : string[] =["red","blue","green","orange"];

  studentobj : Student;

  constructor()
  {
  this.studentobj=new Student();
    this.mark=86;
  }

  showdata()
  {
    alert("Hi " + this.studentobj.sname);
  }

}
