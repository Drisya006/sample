import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { AdddepartmentComponent } from 'src/app/adddepartment/adddepartment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [DepartmentComponent,
     EditDepartmentComponent,
     DepartmentdetailComponent,
     AdddepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,


  ],
  entryComponents: [
    AdddepartmentComponent
  ],
})
export class DepartmentModule { }
