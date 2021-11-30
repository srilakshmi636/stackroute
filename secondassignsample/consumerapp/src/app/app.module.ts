import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ManufactComponent } from './manufact/manufact.component';
import { ProductsecureGuard } from './productsecure.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridviewComponent } from './gridview/gridview.component';
import { ListviewComponent } from './listview/listview.component';
import { ProducttakerComponent } from './producttaker/producttaker.component';



const myroutes: Routes =[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent,
    
    children:[
      {
        path:'manu',
        component:ManufactComponent,
        children:[
          
        ]
      },
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'',
        redirectTo:'manu',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[ProductsecureGuard],
    children:
    [
      {
        path:'gridview',
        component:GridviewComponent
      },
      {
        path:'listview',
        component:ListviewComponent
      },
      {
        path:'',
        redirectTo:'listview',
        pathMatch:'full'
      }
    ]

  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    CategoryComponent,
    ManufactComponent,
    DashboardComponent,
    GridviewComponent,
    ListviewComponent,
    ProducttakerComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myroutes)

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
