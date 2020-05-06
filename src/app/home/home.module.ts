import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StudentComponent } from '../student/student.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';


@NgModule({
  declarations: [HomeComponent,
  StudentComponent,
],
  imports: [
  CommonModule,
    HomeRoutingModule 

  ]
})
export class HomeModule { }
