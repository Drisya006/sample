import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { AdddepartmentComponent } from 'src/app/adddepartment/adddepartment.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDepartmentComponent } from './edit-department/edit-department.component';


@NgModule({
  declarations: [DepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    



  ]
})
export class DepartmentModule { }
