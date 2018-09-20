import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:EmployeelistComponent},
      { path: 'add-employee', component: AddemployeeComponent },  
      { path: 'employee/edit/:id', component: AddemployeeComponent },  
    ]),
    ReactiveFormsModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
