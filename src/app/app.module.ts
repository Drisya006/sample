import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  // ... 
  } from '@angular/animations'; 
import { DepartmentComponent } from './home/department/department.component';
import { EditDepartmentComponent } from './home/department/edit-department/edit-department.component';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    

    


  ],
  // entryComponents: [
  //    AdddepartmentComponent
  // ],
  exports:[
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
