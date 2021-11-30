import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsampleComponent } from './testsample.component';
import { By } from '@angular/platform-browser';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { UsertestService } from '../usertest.service';

fdescribe('TestsampleComponent', () => {
  let component: TestsampleComponent;
  let fixture: ComponentFixture<TestsampleComponent>;

  beforeEach(async () => {

let dummyuser={ user: {"username":"Dan","password":"password"}};


    await TestBed.configureTestingModule({
      declarations: [ TestsampleComponent ],
      imports : [MatToolbarModule],
      providers: [{provide: UsertestService,useValue:dummyuser}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat toolbar should exist',()=>{

  let matobj= fixture.debugElement.query(By.css(".clstool"));
  expect(matobj).toBeTruthy();

  })

// it('h1 should exist',()=>
// {
//   let hobj=fixture.debugElement.query(By.css('#myh1'));
//   expect(hobj).toBeTruthy();
// })

it('h1 content should be checked',()=>{

  let hobj=fixture.debugElement.query(By.css('#myh1'));
  expect(hobj).toBeTruthy();
  expect(hobj.nativeElement.textContent).toEqual('Testing Sample');
})

it('button should have label as done',()=>{
  let butobj=fixture.debugElement.query(By.css('.clsbutton'));
expect(butobj).toBeTruthy();
expect(butobj.nativeElement.textContent).toEqual('Done');

})

it('should check name change in span',()=>{
let spaobj=fixture.debugElement.query(By.css('.clsspan'));
//expect(spaobj).toBeTruthy();
component.name="Natwest";
fixture.detectChanges();
expect(spaobj.nativeElement.textContent).toEqual("Natwest","should display name in span with class name to be clsspan");


})

it('should inject usertest service',()=>{

let resulobj=fixture.debugElement.injector.get(UsertestService);

let obj=fixture.debugElement.query(By.css('.clspname'));
fixture.detectChanges();
expect(obj.nativeElement.textContent).toEqual("Dan");




})




});
